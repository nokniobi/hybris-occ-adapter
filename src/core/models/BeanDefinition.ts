import { BeanProperty } from "./BeanProperty";

export class BeanDefinition {
    type!: "bean" | "enum";
    class!: string;
    values?: string[];
    description?: string | unknown;
    properties?: BeanProperty[];
}