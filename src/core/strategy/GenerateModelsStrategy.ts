import { FileService } from "../service/FileService";
import config from "../../../resources/config.json";
import { XMLService } from "../service/XMLService";
import { ConvertTypeStrategy } from "./ConvertTypeStrategy";
import { AbstractDefinition } from "../models/AbstractDefinition";
import { resource } from "../decorators/resource";


@resource()
export class GenerateModelsStrategy {

    private fileService: FileService;
    private xmlService: XMLService;
    private convertTypesStrategy: ConvertTypeStrategy;

    constructor(
        fs: FileService,
        xmlService: XMLService,
        convertTypesStrategy: ConvertTypeStrategy
    ) {
        this.fileService = fs;
        this.xmlService = xmlService;
        this.convertTypesStrategy = convertTypesStrategy;
    }

    generate() {
        const beans: AbstractDefinition[] = config.ootbWsDtoFile
            .flatMap((location) =>
                this.xmlService.parse(this.fileService.read(location))
            );

        const tsWsDTOs = this.convertTypesStrategy.convert(beans);

        const generatedTypes: string[] = [];
        for (const wsDto of tsWsDTOs) {
            generatedTypes.push(wsDto.toTypeString());
        }
        this.fileService.write(config.generatedModels, generatedTypes.join("\n"));
    }
}