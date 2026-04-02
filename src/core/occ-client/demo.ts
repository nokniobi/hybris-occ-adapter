import { occ_dependency } from "../decorators/occ-dependency";
import { OccOauthInterceptor } from "./interceptor/oauth-interceptor";
import { OccClient } from "./occ-client";
import { ProductSearchPageWsDTO } from "../generated/types";
import { FieldSet } from "./model/field-set";
import { HttpMethod } from "./model/http-method";
import { OccHttpException } from "./model/occ-http-exception";
import { ConfigService } from "../service/ConfigService";

@occ_dependency()
export class Demo {

    async run(): Promise<void> {
        const config = ConfigService.getInstance().getAll();
        const searchProducts = (config.net.endpoint as { [key: string]: any })["search_products"];

        const occClient = await new OccClient<ProductSearchPageWsDTO>()
            .url(searchProducts.url)
            .method(HttpMethod.GET)
            .addInterceptor(new OccOauthInterceptor({
                oAuthServerUrl: config.net.oAuthServerUrl,
                clientId: config.net.clientId,
                clientSecret: config.net.clientSecret,
                grantType: config.net.grantType
            }))
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