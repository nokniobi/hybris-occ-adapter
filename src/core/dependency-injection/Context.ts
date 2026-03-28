import "reflect-metadata";

class Context {

    private constructors: Map<Function, Function>;
    private instances: Map<Function, unknown>;

    constructor() {
        this.constructors = new Map();
        this.instances = new Map();
    }

    register(constructor: Function): void {
        if (this.constructors.has(constructor)) {
            return;
        }
        this.constructors.set(constructor, constructor);
    }

    getInjectable<T>(type: new (...args: any[]) => T): T {
        console.log(`Calling injectable by ${type.name}`)
        if (this.instances.has(type)) {
            return this.instances.get(type) as T;
        }
        const paramTypes: Function[] = Reflect.getMetadata("design:paramtypes", type) ?? [];
        const args = paramTypes.map(paramType => this.getInjectable(paramType as new (...args: any[]) => unknown));
        const instance = new type(...args);
        this.instances.set(type, instance);
        return instance;
    }

}

var globalContext: Context;

export function getContext(): Context {
    if (!globalContext) {
        globalContext = new Context();
    }
    return globalContext;
}