# hybris-occ-adapter

> **Learning project only.** This repository is built for educational purposes and is not intended for production use.

A TypeScript code generator that converts SAP Commerce (Hybris) OCC DTO bean definitions from XML into TypeScript interfaces and enums.

## What it does

SAP Commerce defines its OCC API data types in `*-beans.xml` files using Java class conventions. This tool parses those XML files and generates ready-to-use TypeScript types, handling:

- Java bean definitions → `export interface`
- Java enums → `export type` union (e.g. `export type MyEnum = "A" | "B"`)
- Java primitives → TypeScript equivalents (`String` → `string`, `Integer` → `number`, etc.)
- Java collections → TypeScript arrays (`List<Product>` → `Product[]`)
- Java maps → TypeScript records (`Map<String, Product>` → `Record<string, Product>`)

The generated output is written to `src/core/generated/types.ts`.

## Prerequisites

- Node.js
- TypeScript
- SAP Commerce bean XML files (not included — see [Setup](#setup))

## Setup

The SAP Commerce bean XML files are **not included** in this repository due to SAP copyright restrictions. You must supply your own copies from a licensed SAP Commerce installation and place them at:

```
resources/commercewebservicescommons-beans.xml
resources/webservicescommons-beans.xml
```

Install dependencies:

```bash
npm install
```

## Usage

Build and run the generator:

```bash
npm run build:start
```

Or build separately, then run:

```bash
npm run build
npm start
```

The generated TypeScript types will be written to `src/core/generated/types.ts`.

## Configuration

`resources/config.json` controls input/output paths:

```json
{
    "ootbWsDtoFile": [
        "./resources/commercewebservicescommons-beans.xml",
        "./resources/webservicescommons-beans.xml"
    ],
    "generatedModels": "./src/core/generated/types.ts"
}
```

## Type mapping

Java-to-TypeScript type mappings are defined in `resources/type-map.json`. You can extend it with custom mappings for primitives, collections, and maps.

## Project structure

```
src/
  core/
    generated/       # Output — generated TypeScript types
    models/          # AbstractDefinition, BeanDefinition, EnumDefinition, PropertyDefinition, DefinitionType
    service/         # FileService (I/O), XMLService (XML parsing)
    strategy/        # GenerateModelsStrategy, ConvertTypesStrategy
resources/
  config.json        # Input/output path configuration
  type-map.json      # Java → TypeScript type mappings
```

## License

ISC — Matvii Chebukin
