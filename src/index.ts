import { occ_dependency } from "./core/decorators/occ-dependency";
import { getContext } from "./core/dependency-injection/Context";
import { GenerateModelsService } from "./core/service/GenerateModelsService";

@occ_dependency()
export class Main {

    private generateStrategy: GenerateModelsService;

    constructor(generateStrategy: GenerateModelsService) {
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