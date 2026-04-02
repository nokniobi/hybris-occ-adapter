import { occ_dependency } from "../decorators/occ-dependency";
import { OccOauthInterceptor } from "./interceptor/oauth-interceptor";
import { OccClient } from "./occ-client";
import config from "../../../resources/config.json";
import { ProductSearchPageWsDTO } from "../generated/types";
import { FieldSet } from "./model/field-set";
import { HttpMethod } from "./model/http-method";
import { OccHttpException } from "./model/occ-http-exception";


@occ_dependency()
export class Demo {

    async run(): Promise<void> {
        const searchProducts = (config.net.endpoint as { [key: string]: any })["search_products"];

        const occClient = await new OccClient<ProductSearchPageWsDTO>()
            .url(searchProducts.url)
            .method(HttpMethod.GET)
            .addInterceptor(new OccOauthInterceptor())
            .fieldSet(FieldSet.BASIC);

        let searchPage: ProductSearchPageWsDTO;
        try {
            searchPage = await occClient.execute();
            console.log("Search result:", JSON.stringify(searchPage.products[0], null, 2));
        } catch (ex) {
            if (ex instanceof OccHttpException) {
                console.error(ex.message, "Status:", ex.status, "Response:", JSON.stringify(ex.response, null, 2));
            }
        }
    }
}