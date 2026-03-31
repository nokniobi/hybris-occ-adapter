import { AbstractDefinition } from "./AbstractDefinition";
import { DefinitionType } from "./DefinitionType";


export class EnumDefinition extends AbstractDefinition {


    private _values: string[]

    constructor(type: DefinitionType, cls: string, description?: string) {
        super(type, cls, description);
        this._values = [];
    }


    get values(): string[] { return Array.from(this._values) }
    set values(values: string[]) { this._values = values }

    addValue(value: string) {
        this._values.push(value);
    }

    protected render(): string {
        return `
            //${this.description}
            export type ${this.class} = ${this.values?.map((v) => `"${v}"`).join(" | ")};`
    }

}