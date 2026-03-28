export class BeanProperty {
    name!: string;
    type!: string;
    description?: string | unknown;

    toTypeString(): string {
        return `
            /**
             * ${this.description}
             * 
             **/
            ${this.name}:${this.type}
        `
    }
}