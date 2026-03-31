import { BeanDefinition } from "../models/BeanDefinition";
import TYPES_MAP from "../../../resources/type-map.json";
import { AbstractDefinition } from "../models/AbstractDefinition";
import { EnumDefinition } from "../models/EnumDefinition";
import { resource } from "../decorators/resource";

/**
 * Converts Java type strings from bean.xml into their TypeScript equivalents.
 *
 * Used during code generation to produce typed TypeScript interfaces from
 * SAP Commerce / OCC DTO bean definitions.
 *
 * Java types are resolved in the following order:
 *  1. Primitive / scalar  — e.g. `java.lang.String` → `string`, `Integer` → `number`
 *  2. Single-element collection — e.g. `java.util.List<Product>` → `Product[]`
 *  3. Two-element collection (map) — e.g. `java.util.Map<String, Product>` → `Record<string, Product>`
 *  4. Reference (class) type — unrecognised class name used as-is as a TypeScript interface name
 *
 * Type mappings are driven by `resources/type-map.json`.
 */
@resource()
export class ConvertTypeStrategy {

    private static GENERIC = /[<|>]/
    private static ARRAY = "[]";
    private static DEFAULT_TS_TYPE = "unknown"

    // TODO: Decide if I want to leave mutation here
    convert(definitions: AbstractDefinition[]): AbstractDefinition[] {
        for (const def of definitions) {
            if (def instanceof BeanDefinition) {
                this.processBean(def);
            }
            if (def instanceof EnumDefinition) {
                this.processEnum(def);
            }
        }
        return definitions;
    }

    private processBean(bean: BeanDefinition): void {
        bean.class = this.getTypescriptClass(bean.class)
        if (bean.properties) {
            for (const property of bean.properties) {
                property.class = this.getTypescriptClass(property.class);
            }
        }
    }

    private processEnum(_enum: EnumDefinition) {
        _enum.class = this.getTypescriptClass(_enum.class);
    }

    private getTypescriptClass(javaClass: string): string {
        if (this.isCollection(javaClass)) {
            return this.getCollectionType(javaClass);
        }
        if (this.isGeneric(javaClass)) {
            return this.getGenericType(javaClass);
        }
        const primitiveType = this.getPrimitiveType(javaClass);
        return primitiveType ?? this.getReferenceType(javaClass);
    }

    private getCollectionType(javaClass: string): string {
        if (this.isList(javaClass)) {
            return `${this.getReferenceType(this.eraseGeneric(javaClass))}${ConvertTypeStrategy.ARRAY}`
        }
        if (this.isMap(javaClass)) {
            const params = this.eraseGeneric(javaClass).split(",").map(p => p.trim());
            const key = this.getPrimitiveType(params[0] ?? "") ?? this.getReferenceType(params[0] ?? ConvertTypeStrategy.DEFAULT_TS_TYPE);
            const value = this.getPrimitiveType(params[1] ?? "") ?? this.getReferenceType(params[1] ?? ConvertTypeStrategy.DEFAULT_TS_TYPE);
            return `Record<${key}, ${value}>`;
        }
        throw new Error(`List or Map was expected for ${javaClass}`);
    }

    private getGenericType(javaClass: string): string {
        return `${this.getReferenceType(javaClass)}` + "<" + this.eraseGeneric(javaClass) + ">";
    }

    private getReferenceType(javaClass: string): string {
        const plainType = javaClass.replace(/<.*>/, "");
        const classpath = plainType.split(".");
        return classpath[classpath.length - 1] ?? ConvertTypeStrategy.DEFAULT_TS_TYPE;
    }

    private getPrimitiveType(javaClass: string): string | null {
        return (TYPES_MAP.primitive as Record<string, string>)[javaClass] ?? null;
    }

    private isCollection(type: string): boolean {
        return this.isList(type) || this.isMap(type);
    }

    private isGeneric(type: string): boolean {
        return ConvertTypeStrategy.GENERIC.test(type);
    }

    private isList(type: string): boolean {
        return TYPES_MAP.lists.find((javaCollection) => type.indexOf(javaCollection) >= 0) !== undefined
    }

    private isMap(type: string): boolean {
        return TYPES_MAP.maps.find((javaCollection) => type.indexOf(javaCollection) >= 0) !== undefined
    }

    private eraseGeneric(javaClass: string): string {
        if (!this.isGeneric(javaClass)) {
            return "";
        }
        const match = javaClass.match(/<(.+)>/);
        return match![1] ?? "T";
    }
}