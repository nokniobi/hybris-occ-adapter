import { BeanDefinition } from "../models/BeanDefinition";
import { DOMParser } from "@xmldom/xmldom"
import { BeanProperty } from "../models/BeanProperty";


// TODO: Erase strings into enum or static variables
export class XMLService {

    parse(xml: string): BeanDefinition[] {

        const dom = new DOMParser().parseFromString(xml);

        const beans = dom.getElementsByTagName("bean");
        const enums = dom.getElementsByTagName("enum");

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
        beanDefinition.type = "bean";
        beanDefinition.class = this.getClass(bean);
        beanDefinition.description = this.getDescription(bean);

        const propertyDefinitions: BeanProperty[] = [];
        const properties = bean.getElementsByTagName("property");
        for (const property of Array.from(properties)) {
            propertyDefinitions.push(this.processProperty(property));
        }
        beanDefinition.properties = propertyDefinitions;

        return beanDefinition;
    }

    private processEnums(_enum: Element): BeanDefinition {
        const beanDefinition: BeanDefinition = new BeanDefinition();
        beanDefinition.type = "enum";
        beanDefinition.class = this.getClass(_enum)
        const enumValues: string[] = [];
        for (const value of Array.from(_enum.getElementsByTagName("value"))) {
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
        return node?.getElementsByTagName("description")?.
            item(0)?.
            childNodes?.
            item(0)?.textContent as string ?? "";
    }

    private getClass(node: Element): string {
        return node.getAttribute("class") as string
    }

    private getName(node: Element): string {
        return node.getAttribute("name") as string
    }

    private getType(node: Element): string {
        return node.getAttribute("type") as string
    }

}