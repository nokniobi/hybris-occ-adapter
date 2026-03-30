import { BeanDefinition } from "../models/BeanDefinition";
import { DOMParser } from "@xmldom/xmldom"
import { BeanProperty } from "../models/BeanProperty";

export class XMLService {
    private static readonly TAG_BEAN = "bean";
    private static readonly TAG_ENUM = "enum";
    private static readonly TAG_PROPERTY = "property";
    private static readonly TAG_VALUE = "value";
    private static readonly TAG_DESCRIPTION = "description";

    private static readonly ATTR_CLASS = "class";
    private static readonly ATTR_NAME = "name";
    private static readonly ATTR_TYPE = "type";

    private static readonly DEF_TYPE_BEAN = "bean";
    private static readonly DEF_TYPE_ENUM = "enum";

    parse(xml: string): BeanDefinition[] {

        const dom = new DOMParser().parseFromString(xml);

        const beans = dom.getElementsByTagName(XMLService.TAG_BEAN);
        const enums = dom.getElementsByTagName(XMLService.TAG_ENUM);

        const beanDefinitions: BeanDefinition[] = [];
        for (const bean of Array.from(beans)) {
            beanDefinitions.push(this.processBean(bean));
        }
        for (const _enum of Array.from(enums)) {
            beanDefinitions.push(this.processEnums(_enum));
        }

        return beanDefinitions;
    }

    private processBean(bean: Element): BeanDefinition {
        const beanDefinition: BeanDefinition = new BeanDefinition();
        beanDefinition.type = XMLService.DEF_TYPE_BEAN;
        beanDefinition.class = this.getClass(bean);
        beanDefinition.description = this.getDescription(bean);

        const propertyDefinitions: BeanProperty[] = [];
        const properties = bean.getElementsByTagName(XMLService.TAG_PROPERTY);
        for (const property of Array.from(properties)) {
            propertyDefinitions.push(this.processProperty(property));
        }
        beanDefinition.properties = propertyDefinitions;

        return beanDefinition;
    }

    private processEnums(_enum: Element): BeanDefinition {
        const beanDefinition: BeanDefinition = new BeanDefinition();
        beanDefinition.type = XMLService.DEF_TYPE_ENUM;
        beanDefinition.class = this.getClass(_enum)
        const enumValues: string[] = [];
        for (const value of Array.from(_enum.getElementsByTagName(XMLService.TAG_VALUE))) {
            enumValues.push(value.childNodes.item(0).textContent as string);
        }
        beanDefinition.values = enumValues;
        return beanDefinition;
    }

    private processProperty(property: Element): BeanProperty {
        const beanProperty = new BeanProperty();
        beanProperty.name = this.getName(property);
        beanProperty.type = this.getType(property);
        beanProperty.description = this.getDescription(property);
        return beanProperty;
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
