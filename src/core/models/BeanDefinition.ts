import { BeanProperty } from "./BeanProperty";

export class BeanDefinition {
    type!: "bean" | "enum";
    class!: string;
    values?: string[];
    description?: string | unknown;
    properties?: BeanProperty[];


    toTypeString(): string {
        // TODO:process enums
        return `
            // ${this.description ? (this.description as string).replace("\n", "") : ""}
            interface ${this.class} {
                ${this.properties ? this.properties.map((p) => p.toTypeString()).join(",\n") : ""}
            }
        `;
    }
}