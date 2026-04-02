import * as fs from "fs";
import * as path from "path";

export class ConfigService {

    private static instance: ConfigService;
    private _config: any;

    private constructor() {
        const configPath = process.env.OCC_ADAPTER_CONFIG
            ?? path.resolve(__dirname, "../../../hybris-occ-adapter-config.json");
        this._config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    }

    static getInstance(): ConfigService {
        if (!ConfigService.instance) {
            ConfigService.instance = new ConfigService();
        }
        return ConfigService.instance;
    }

    get<T = any>(key: string): T {
        return this._config[key];
    }

    getAll(): any {
        return this._config;
    }
}
