import { BeanProperty } from "./BeanProperty";

export class BeanDefinition {
    type!: "bean" | "enum";
    class!: string;
    values?: string[];
    description?: string | unknown;
    properties?: BeanProperty[];


    toTypeString(): string {

        if (this.type === "bean") {
            return this.toInterfaceString();
        } else {
            return this.toEnumString()
        }

    }

    toInterfaceString(): string {
        return `
            // ${this.description ? (this.description as string).replace("\n", "") : ""}
            export interface ${this.class} {
                ${this.properties ? this.properties.map((p) => p.toTypeString()).join("\n") : ""}
            }`;
    }

    toEnumString(): string {
        return `
            //${this.description}

            export const enum ${this.class} {
                ${this.values?.map((v) => `${v}="${v}"`).join(",\n")}
            }`
    }
}