import { ErrorListWsDTO } from "../generated/types";
import { Interceptor } from "./interceptor/interceptor";
import { OccHttpException } from "./model/occ-http-exception";


/**
 * Fluent HTTP client for SAP Commerce OCC REST API requests.
 *
 * Supports interceptors (e.g. OAuth), fieldset control, and typed responses.
 * Throws {@link OccHttpException} on non-2xx responses, including OCC error details.
 *
 * @template K - the expected response type
 *
 * @example
 * try {
 *     const result = await new OccClient<ProductSearchPageWsDTO>()
 *         .url("https://localhost:9002/occ/v2/apparel-uk/products/search")
 *         .method(HttpMethod.GET)
 *         .fieldSet(FieldSet.BASIC)
 *         .addInterceptor(new OccOauthInterceptor())
 *         .execute();
 * } catch (e) {
 *     if (e instanceof OccHttpException) {
 *         console.error(`HTTP ${e.status}: ${e.message}`);
 *     }
 * }
 */
export class OccClient<K> {

    _url: string;
    _method: string;
    _body: any;
    _interceptors: Interceptor<unknown>[];
    _headers: Record<string, string>[];
    _fieldSet: string;

    constructor() {
        this._url = "";
        this._method = "";
        this._body = null;
        this._interceptors = [];
        this._headers = [];
        this._fieldSet = "DEFAULT";
    }


    method(method: string): OccClient<K> {
        this._method = method;
        return this;
    }

    url(url: string): OccClient<K> {
        this._url = url;
        return this;
    }

    fieldSet(fieldSet: string): OccClient<K> {
        this._fieldSet = fieldSet;
        return this;
    }

    addInterceptor(interceptor: Interceptor<unknown>): OccClient<K> {
        this._interceptors.push(interceptor);
        return this;
    }

    body(body: any): OccClient<K> {
        this._body = body;
        return this;
    }

    async execute(): Promise<K> {
        await this.applyInterceptors();
        const response = await fetch(this.buildUrl(), {
            method: this._method,
            headers: this._headers.reduce((acc, header) => ({ ...acc, ...header }), {}),
            body: this.getBody()
        });

        const json = await response.json();
        if (!response.ok) {
            throw new OccHttpException(`Request failed for ${this._url}`, response.status, json);
        }

        return json as K;
    }

    private buildUrl(): string {
        const url = new URL(this._url);
        url.searchParams.set("fields", this._fieldSet);
        return url.toString();
    }

    private getBody(): string | null {
        if (this._method === "GET") {
            return null;
        }
        return JSON.stringify(this._body);
    }

    private async applyInterceptors(): Promise<void> {
        const interceptors = this._interceptors.map(interceptor => interceptor.intercept(this));
        await Promise.all(interceptors);
    }
}