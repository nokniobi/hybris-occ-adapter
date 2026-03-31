import { AbstractDefinition } from "./AbstractDefinition";
import { DefinitionType } from "./DefinitionType";

export class PropertyDefinition extends AbstractDefinition {

    name: string;

    constructor(type: DefinitionType, cls: string, name: string, description?: string) {
        super(type, cls, description);
        this.name = name;
    }


    protected render(): string {
        return `
            /**
             * ${this.description}
             * 
             **/
            ${this.name}:${this.class}
        `
    }
}