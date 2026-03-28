import { injectable } from "./core/decorators/injectable";
import { getContext } from "./core/dependency-injection/Context";
import { GenerateModelsStrategy } from "./core/strategy/GenerateModelsStrategy";


@injectable()
export class Main {

    private generateStrategy: GenerateModelsStrategy;

    constructor(generateStrategy: GenerateModelsStrategy) {
        this.generateStrategy = generateStrategy;
    }

    start(): void {
        this.generateStrategy.generate()
    }
}

// Entry Point
getContext().getInjectable<Main>(Main).start()