import { FileService } from "./FileService";
import { XMLService } from "./XMLService";
import { ConvertTypeService } from "./ConvertTypeService";
import { AbstractDefinition } from "../models/AbstractDefinition";
import { occ_dependency } from "../decorators/occ-dependency";
import { MergeDefinitionService } from "./MergeDefinitionService";
import { BeanDefinition } from "../models/BeanDefinition";
import { ConfigService } from "./ConfigService";


@occ_dependency()
export class GenerateModelsService {

    private fileService: FileService;
    private xmlService: XMLService;
    private convertTypeService: ConvertTypeService;
    private mergeDefinitionService: MergeDefinitionService;

    constructor(
        fs: FileService,
        xmlService: XMLService,
        convertTypeService: ConvertTypeService,
        ms: MergeDefinitionService
    ) {
        this.fileService = fs;
        this.xmlService = xmlService;
        this.convertTypeService = convertTypeService;
        this.mergeDefinitionService = ms;
    }

    generate() {
        const config = ConfigService.getInstance().getAll();

        const ootbDefinitions: AbstractDefinition[] = config.ootbWsDtoFile
            .flatMap((location: string) =>
                this.xmlService.parse(this.fileService.read(location))
            );
        const customDefinitions: AbstractDefinition[] = config.customWsDtoFile
            .flatMap((location: string) =>
                this.xmlService.parse(this.fileService.read(location))
            );

        this.mergeDefinitionService.merge(ootbDefinitions as BeanDefinition[], customDefinitions as BeanDefinition[]);
        const tsWsDTOs = this.convertTypeService.convert(ootbDefinitions);

        const generatedTypes: string[] = [];
        for (const wsDto of tsWsDTOs) {
            generatedTypes.push(wsDto.toTypeString());
        }
        this.fileService.write(config.generatedModels, generatedTypes.join("\n"));
    }
}