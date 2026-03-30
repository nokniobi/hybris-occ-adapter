import { injectable } from "../decorators/injectable";
import { FileService } from "../service/FileService";
import config from "../../../resources/config.json";
import { XMLService } from "../service/XMLService";
import { BeanDefinition } from "../models/BeanDefinition";
import { ConvertTypesStrategy } from "./ConvertTypesStrategy";


@injectable()
export class GenerateModelsStrategy {

    fileService: FileService;
    xmlService: XMLService;
    convertTypesStrategy: ConvertTypesStrategy;

    constructor(fs: FileService,
        xmlService: XMLService,
        convertTypesStrategy: ConvertTypesStrategy) {
        this.fileService = fs;
        this.xmlService = xmlService;
        this.convertTypesStrategy = convertTypesStrategy;
    }

    generate() {
        console.log("============ Generating =============");
        const beans: BeanDefinition[] = config.ootbWsDtoFile.flatMap((location) =>
            this.xmlService.parse(this.fileService.read(location))
        );
        const types = new Set();
        beans.forEach((b) => {
            b.properties?.forEach((p) => {
                types.add(p.type);
            })
        })
        const tsWsDTOs = this.convertTypesStrategy.convert(beans);

        const generatedTypes: string[] = [];
        for (const wsDto of tsWsDTOs) {
            generatedTypes.push(wsDto.toTypeString());
        }
        this.fileService.write(config.generatedModels, generatedTypes.join("\n"));
    }
}