import { BeanDefinition } from "../models/BeanDefinition";
import TYPES_MAP from "../../../resources/type-map.json";
import { BeanProperty } from "../models/BeanProperty";


export class ConvertTypesStrategy {

    private static COLLECTION = ">";
    private static PACKAGE_DELIMITER = ".";
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
        if (javaClass.indexOf(ConvertTypesStrategy.COLLECTION) > 0) {
            return this.getCollectionType(javaClass);
        }
        const primitiveType = this.getPrimitiveType(javaClass);
        return primitiveType ?? this.getReferenceType(javaClass);
    }

    private getCollectionType(javaClass: string): string {
        return `${this.getReferenceType(javaClass)}${ConvertTypesStrategy.ARRAY}`;
    }

    private getReferenceType(javaClass: string): string {
        const classpath = javaClass.split(/[<|.]/);
        const className = classpath[classpath.length - 1]?.replace(ConvertTypesStrategy.COLLECTION, "");
        return className ?? ConvertTypesStrategy.DEFAULT_TS_TYPE;
    }

    private getPrimitiveType(javaClass: string): string | null {
        return (TYPES_MAP as Record<string, string>)[javaClass] ?? null;
    }
}