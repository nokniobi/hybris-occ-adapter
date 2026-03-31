import { AbstractDefinition } from "./AbstractDefinition";
import { DefinitionType } from "./DefinitionType";
import { PropertyDefinition } from "./PropertyDefinition";

export class BeanDefinition extends AbstractDefinition {

    private _properties: PropertyDefinition[];


    constructor(type: DefinitionType, cls: string, description?: string) {
        super(type, cls, description);
        this._properties = [];
    }


    get properties(): PropertyDefinition[] { return Array.from(this._properties) }

    addProperty(property: PropertyDefinition) {
        this._properties.push(property);
    }

    protected render(): string {
        return `
            // ${this.description ? (this.description as string).replace("\n", "") : ""}
            export interface ${this.class} {
                ${this.properties ? this.properties.map((p) => p.toTypeString()).join("\n") : ""}
            }`;
    }
}