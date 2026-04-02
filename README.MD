# hybris-occ-adapter

> **Learning project only.** This repository is built for educational purposes and is not intended for production use.

A TypeScript library for SAP Commerce (Hybris) OCC API integration. It includes:

- **OCC HTTP client** — fluent builder for typed OCC REST requests with interceptor support
- **OAuth2 interceptor** — automatic token fetch and refresh for SAP Commerce authorization server
- **CLI type generator** — converts SAP Commerce OCC DTO bean definitions from XML into TypeScript interfaces and enums

## OCC HTTP Client

Browser and Node.js compatible. Import from the package root:

```typescript
import {
    OccClient,
    OccOauthInterceptor,
    OccHttpException,
    HttpMethod,
    FieldSet
} from "hybris-occ-adapter";

try {
    const result = await new OccClient<ProductSearchPageWsDTO>()
        .url("https://localhost:9002/occ/v2/apparel-uk/products/search")
        .method(HttpMethod.GET)
        .fieldSet(FieldSet.BASIC)
        .addInterceptor(new OccOauthInterceptor({
            oAuthServerUrl: "https://localhost:9002/authorizationserver/oauth/token",
            clientId: "your_client_id",
            clientSecret: "your_client_secret",
            grantType: "client_credentials"
        }))
        .execute();

    console.log(result.products);
} catch (e) {
    if (e instanceof OccHttpException) {
        console.error(`HTTP ${e.status}: ${e.message}`);
    }
}
```

### OAuth2 Interceptor

`OccOauthInterceptor` automatically fetches and injects a Bearer token before each request. The token is shared across all instances (singleton per page/process) and refreshed automatically when expired.

Config is passed directly via constructor — use Angular's `environment.ts` or any config source:

```typescript
new OccOauthInterceptor({
    oAuthServerUrl: environment.oAuthServerUrl,
    clientId: environment.clientId,
    clientSecret: environment.clientSecret,
    grantType: "client_credentials"
})
```

## CLI Type Generator

Generates TypeScript types from SAP Commerce `*-beans.xml` files. Runs in Node.js at build time — not included in browser bundles.

### Setup

1. Create `hybris-occ-adapter-config.json` in your project root:

```json
{
    "ootbWsDtoFile": [
        "./resources/commercewebservicescommons-beans.xml",
        "./resources/webservicescommons-beans.xml"
    ],
    "customWsDtoFile": [
        "./resources/custom-beans.xml"
    ],
    "generatedModels": "./src/generated/types.ts"
}
```


### What it generates

- Java bean definitions → `export interface`
- Java enums → `export type` union (e.g. `export type MyEnum = "A" | "B"`)
- Java primitives → TypeScript equivalents (`String` → `string`, `Integer` → `number`, etc.)
- Java collections → TypeScript arrays (`List<Product>` → `Product[]`)
- Java maps → TypeScript records (`Map<String, Product>` → `Record<string, Product>`)

### Custom bean overrides

Override or extend OOTB bean definitions without modifying SAP-provided XML files.

Merge behaviour:
- If a custom bean matches an OOTB bean by class name, its property types and descriptions overwrite the OOTB ones.
- If a custom bean has no OOTB counterpart, it is appended to the output as a new type.
- Properties present only in the custom bean (not in the OOTB bean) are discarded.

### SAP Commerce XML files

The SAP Commerce bean XML files are **not included** due to SAP copyright restrictions. Supply your own copies from a licensed SAP Commerce installation.

## Type mapping

Java-to-TypeScript type mappings are defined in `resources/type-map.json`. You can extend it with custom mappings for primitives, collections, and maps.

## Project structure

```
src/
  lib.ts                # Library entry point — exports OccClient, interceptors, models
  cli.ts                # CLI entry point — type generation command
  core/
    decorators/           # @occ_dependency() — registers classes in the DI context
    dependency-injection/ # Lightweight IoC container (Context)
    generated/            # Output — generated TypeScript types
    models/               # AbstractDefinition, BeanDefinition, EnumDefinition,
                          #   PropertyDefinition, DefinitionType
    occ-client/           # OCC HTTP client
      interceptor/        # Interceptor interface and OAuthInterceptor
      model/              # HttpMethod, FieldSet, OccHttpException, OAuth2Response
      occ-client.ts       # Fluent OCC HTTP client builder
    service/
      ConfigService        # Loads hybris-occ-adapter-config.json
      FileService          # File I/O
      XMLService           # Parses *-beans.xml into definition models
      ConvertTypeService   # Maps Java types to TypeScript equivalents
      MergeDefinitionService # Merges custom bean overrides into OOTB definitions
      GenerateModelsService  # Orchestrates the full generation pipeline
hybris-occ-adapter-config.json  # Project config (type generator paths)
resources/
  type-map.json      # Java → TypeScript type mappings
  custom-beans.xml   # (optional) Custom bean override definitions
```

## License

ISC — Matvii Chebukin
