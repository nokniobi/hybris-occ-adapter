#!/usr/bin/env node
import * as path from "path";
import * as fs from "fs";

const args = process.argv.slice(2);

const configIndex = args.indexOf("--config");
const configPath = configIndex !== -1 && args[configIndex + 1]
    ? path.resolve(args[configIndex + 1]!)
    : path.resolve(process.cwd(), "occ-adapter.config.json");

if (!fs.existsSync(configPath)) {
    console.error(`Config file not found at: ${configPath}`);
    console.error(`Usage: occ-adapter --generate-types [--config <path>]`);
    process.exit(1);
}

if (args.includes("--generate-types")) {
    console.log("Generating types from config:", configPath);
    process.env.OCC_ADAPTER_CONFIG = configPath;

    import("./core/dependency-injection/Context")
        .then(({ getContext }) => {
            import("./core/service/GenerateModelsService")
                .then(({ GenerateModelsService }) => {
                    getContext().getResource(GenerateModelsService).generate();
                });
        }).catch(err => {
            console.error("Type generation failed:", err);
            process.exit(1);
        });
} else {
    console.log("No command specified. Available commands:");
    console.log("  --generate-types   Generate TypeScript types from XML bean definitions");
    console.log("  --config <path>    Path to config file (default: ./occ-adapter.config.json)");
}
