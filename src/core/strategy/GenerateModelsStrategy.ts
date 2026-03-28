import { injectable } from "../decorators/injectable";
import { FileService } from "../service/FileService";
import config from "../../../resources/config.json";


@injectable()
export class GenerateModelsStrategy {

    fileService: FileService;

    constructor(fs: FileService) {
        this.fileService = fs;
    }

    async generate() {
        console.log("============ Generating =============");
        const content = await this.fileService.read(config.ootbWsDtoFile);
        console.log(content);
    }

}