import { occ_dependency } from "../decorators/occ-dependency";
import { AbstractDefinition } from "../models/AbstractDefinition";
import { BeanDefinition } from "../models/BeanDefinition";
import { DefinitionType } from "../models/DefinitionType";
import { PropertyDefinition } from "../models/PropertyDefinition";


@occ_dependency()
export class MergeDefinitionService {


    /**
     * Merges custom bean definitions into the base (OOTB) definitions list.
     *
     * Algorithm:
     * 1. Filter `base` to bean definitions only (type === DefinitionType.bean).
     * 2. For each bean in `base`, look up a matching bean in `toMerge` by class name.
     *    - No match: leave the base bean unchanged, continue.
     *    - Match found: merge the override into the base bean, then remove it from `toMerge`.
     *      Merging updates each matching property's `class` and `description` by name;
     *      properties present only in the override are discarded.
     * 3. After iteration, any remaining entries in `toMerge` (new beans not present in `base`)
     *    are appended to `base`.
     *
     * Both `base` and `toMerge` are mutated in place.
     *
     * @param base - OOTB definitions; receives merged results and any new beans from `toMerge`
     * @param toMerge - custom definitions to merge from; consumed and emptied during the merge
     */
    merge(base: BeanDefinition[], toMerge: BeanDefinition[]) {

        const beans: BeanDefinition[] = base.filter(def => def.type === DefinitionType.bean) as BeanDefinition[];

        for (const bean of beans) {
            const override = this.findBeanDefinition(bean, toMerge);
            if (override === undefined) {
                continue;
            }
            this.doMerge(bean, override);
            this.removeBeanDefinition(override, toMerge);
        }
        base.push(...toMerge);
    }

    private doMerge(base: BeanDefinition, toMerge: BeanDefinition) {
        base.description = toMerge.description;
        for (const property of base.properties) {
            const overrideProperty = this.findPropertyDefinition(property, toMerge.properties);
            if (overrideProperty !== undefined) {
                property.class = overrideProperty.class;
                property.description = overrideProperty.description;
                this.removePropertyDefinition(overrideProperty, toMerge.properties);
            }
        }
    }

    private findBeanDefinition(definition: BeanDefinition, definitions: BeanDefinition[]): BeanDefinition | undefined {
        return definitions.find(def => def.class === definition.class);
    }

    private findPropertyDefinition(property: PropertyDefinition, properties: PropertyDefinition[]): PropertyDefinition | undefined {
        return properties.find(prop => prop.name === property.name);
    }

    private removeBeanDefinition(definition: BeanDefinition, definitions: BeanDefinition[]): void {
        const index = definitions.findIndex(def => def.class === definition.class);
        if (index !== -1) {
            definitions.splice(index, 1);
        }
    }

    private removePropertyDefinition(property: PropertyDefinition, properties: PropertyDefinition[]): void {
        const index = properties.findIndex(prop => prop.name === property.name);
        if (index !== -1) {
            properties.splice(index, 1);
        }
    }
}