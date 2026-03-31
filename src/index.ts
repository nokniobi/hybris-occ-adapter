import { resource } from "./core/decorators/resource";
import { getContext } from "./core/dependency-injection/Context";
import { GenerateModelsStrategy } from "./core/strategy/GenerateModelsStrategy";

@resource()
export class Main {

    private generateStrategy: GenerateModelsStrategy;

    constructor(generateStrategy: GenerateModelsStrategy) {
        this.generateStrategy = generateStrategy;
    }

    start(): void {
        this.generateStrategy.generate()
    }
}


try {
    getContext().getResource<Main>(Main).start();
    process.exit(0);
} catch (ex) {
    console.error("Error occured:", ex)
    process.exit(1);
}