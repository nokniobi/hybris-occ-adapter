import "reflect-metadata";

/**
 * Light lib to build dependency injection for this project 
 * 
 */
class Context {

    private constructors: Map<Function, Function>;
    private instances: Map<Function, unknown>;

    constructor() {
        this.constructors = new Map();
        this.instances = new Map();
    }

    register(resource: Function): void {
        if (this.constructors.has(resource)) {
            return;
        }
        this.constructors.set(resource, resource);
    }

    getResource<T>(type: new (...args: any[]) => T): T {
        if (this.instances.has(type)) {
            return this.instances.get(type) as T;
        }
        const paramTypes: Function[] = Reflect.getMetadata("design:paramtypes", type) ?? [];
        const unregistered = paramTypes.filter((p) => !this.constructors.has(p));
        if (unregistered.length > 0) {
            throw new Error(`Unregistered dependencies for ${type.name}: ${unregistered.map(p => p.name).join(", ")}`);
        }
        const args = paramTypes.map(paramType => this.getResource(paramType as new (...args: any[]) => unknown));
        const instance = new type(...args);
        this.instances.set(type, instance);
        return instance;
    }

}

let globalContext: Context;

export function getContext(): Context {
    if (!globalContext) {
        globalContext = new Context();
    }
    return globalContext;
}