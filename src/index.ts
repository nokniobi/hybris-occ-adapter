// DEV ONLY — bypass self-signed cert for local Commerce instance
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import { occ_dependency } from "./core/decorators/occ-dependency";
import { getContext } from "./core/dependency-injection/Context";
import { Demo } from "./core/occ-client/demo";
import { GenerateModelsService } from "./core/service/GenerateModelsService";

@occ_dependency()
export class ModelGenerator {

    private generateStrategy: GenerateModelsService;

    constructor(generateStrategy: GenerateModelsService) {
        this.generateStrategy = generateStrategy;
    }

    start(): void {
        this.generateStrategy.generate()
    }
}



async function main() {
    try {
        // getContext().getResource<ModelGenerator>(ModelGenerator).start();
        await getContext().getResource<Demo>(Demo).run();
        process.exit(0);
    } catch (ex) {
        console.error("Error occured:", ex)
        process.exit(1);
    }
}

main();