import { injectable } from "../decorators/injectable";
import { FileService } from "../service/FileService";
import config from "../../../resources/config.json";
import { XMLService } from "../service/XMLService";
import { BeanDefinition } from "../models/BeanDefinition";


@injectable()
export class GenerateModelsStrategy {

    fileService: FileService;
    xmlService: XMLService

    constructor(fs: FileService, xmlService: XMLService) {
        this.fileService = fs;
        this.xmlService = xmlService;
    }

    async generate() {
        console.log("============ Generating =============");
        const xml = await this.fileService.read(config.ootbWsDtoFile);
        const beans: BeanDefinition[] = this.xmlService.parse(xml);
        
    }

}