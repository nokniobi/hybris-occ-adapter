import { BeanDefinition } from "../models/BeanDefinition";
import TYPES_MAP from "../../../resources/type-map.json";

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
export class ConvertTypesStrategy {

    private static GENERIC = /[<|>]/
    private static ARRAY = "[]";
    private static DEFAULT_TS_TYPE = "unknown"

    convert(beanDefinitions: BeanDefinition[]): BeanDefinition[] {
        for (const bean of beanDefinitions) {
            bean.class = this.getTypescriptClass(bean.class)
            if (bean.properties) {
                for (const property of bean.properties) {
                    property.type = this.getTypescriptClass(property.type);
                }
            }
        }
        return beanDefinitions;
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
            return `${this.getReferenceType(this.eraseGeneric(javaClass))}${ConvertTypesStrategy.ARRAY}`
        }
        if (this.isMap(javaClass)) {
            const params = this.eraseGeneric(javaClass).split(",").map(p => p.trim());
            const key = this.getPrimitiveType(params[0] ?? "") ?? this.getReferenceType(params[0] ?? ConvertTypesStrategy.DEFAULT_TS_TYPE);
            const value = this.getPrimitiveType(params[1] ?? "") ?? this.getReferenceType(params[1] ?? ConvertTypesStrategy.DEFAULT_TS_TYPE);
            return `Record<${key}, ${value}>`;
        }
        throw new Error(`List or Map was expected for ${javaClass}`);
    }

    private getGenericType(javaClass: string): string {
        // TODO template string
        return `${this.getReferenceType(javaClass)}` + "<" + this.eraseGeneric(javaClass) + ">";
    }

    private getReferenceType(javaClass: string): string {
        const plainType = javaClass.replace(/<.*>/, "");
        const classpath = plainType.split(".");
        return classpath[classpath.length - 1] ?? ConvertTypesStrategy.DEFAULT_TS_TYPE;
    }

    private getPrimitiveType(javaClass: string): string | null {
        return (TYPES_MAP.primitive as Record<string, string>)[javaClass] ?? null;
    }

    private isCollection(type: string): boolean {
        return this.isList(type) || this.isMap(type);
    }

    private isGeneric(type: string): boolean {
        return ConvertTypesStrategy.GENERIC.test(type);
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