import { DefinitionType } from "./DefinitionType"

export abstract class AbstractDefinition {

    /**
     * Represenets definition type
     *  - Bean 
     *  - Property for the bean 
     *  - Enum type
     */
    type: DefinitionType

    /**
     * Class of the definition 
     *  Java Type:  
     *      - String, Long, 
     *      - Map, List 
     *      - Any other class type (com.mypackage.MyClass)
     * 
     */
    class: string

    /**
     * Description of the definition provided in beans configuration
     */
    description?: string | undefined

    constructor(type: DefinitionType, cls: string, description?: string) {
        this.type = type;
        this.class = cls;
        this.description = description;
    }


    toTypeString(): string {
        return this.render();
    }

    protected abstract render(): string
}