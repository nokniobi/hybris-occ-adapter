import { BeanDefinition } from "../models/BeanDefinition";
import { DOMParser } from "@xmldom/xmldom"
import { PropertyDefinition } from "../models/PropertyDefinition";
import { DefinitionType } from "../models/DefinitionType";
import { EnumDefinition } from "../models/EnumDefinition";
import { AbstractDefinition } from "../models/AbstractDefinition";
import { resource } from "../decorators/resource";

@resource()
export class XMLService {
    private static readonly TAG_BEAN = "bean";
    private static readonly TAG_ENUM = "enum";
    private static readonly TAG_PROPERTY = "property";
    private static readonly TAG_VALUE = "value";
    private static readonly TAG_DESCRIPTION = "description";

    private static readonly ATTR_CLASS = "class";
    private static readonly ATTR_NAME = "name";
    private static readonly ATTR_TYPE = "type";



    parse(xml: string): AbstractDefinition[] {

        const dom = new DOMParser().parseFromString(xml);

        const beans = dom.getElementsByTagName(XMLService.TAG_BEAN);
        const enums = dom.getElementsByTagName(XMLService.TAG_ENUM);

        const beanDefinitions: AbstractDefinition[] = [];
        for (const bean of Array.from(beans)) {
            beanDefinitions.push(this.processBean(bean));
        }
        for (const _enum of Array.from(enums)) {
            beanDefinitions.push(this.processEnum(_enum));
        }

        return beanDefinitions;
    }

    private processBean(bean: Element): BeanDefinition {
        const beanDefinition: BeanDefinition = new BeanDefinition(
            DefinitionType.bean,
            this.getClass(bean),
            this.getDescription(bean)
        );

        const properties = bean.getElementsByTagName(XMLService.TAG_PROPERTY);
        for (const property of Array.from(properties)) {
            beanDefinition.addProperty(this.processProperty(property))
        }

        return beanDefinition;
    }

    private processEnum(_enum: Element): EnumDefinition {
        const enumDefinition: EnumDefinition = new EnumDefinition(
            DefinitionType.enum,
            this.getClass(_enum)
        );

        for (const value of Array.from(_enum.getElementsByTagName(XMLService.TAG_VALUE))) {
            enumDefinition.addValue(value.childNodes.item(0).textContent as string);
        }
        return enumDefinition;
    }

    private processProperty(property: Element): PropertyDefinition {
        const propertyDefinition = new PropertyDefinition(
            DefinitionType.property,
            this.getType(property),
            this.getName(property),
            this.getDescription(property)
        );
        return propertyDefinition;
    }

    private getDescription(node: Element): string {
        return node?.getElementsByTagName(XMLService.TAG_DESCRIPTION)?.
            item(0)?.
            childNodes?.
            item(0)?.textContent as string ?? "";
    }

    private getClass(node: Element): string {
        return node.getAttribute(XMLService.ATTR_CLASS) as string
    }

    private getName(node: Element): string {
        return node.getAttribute(XMLService.ATTR_NAME) as string
    }

    private getType(node: Element): string {
        return node.getAttribute(XMLService.ATTR_TYPE) as string
    }

}