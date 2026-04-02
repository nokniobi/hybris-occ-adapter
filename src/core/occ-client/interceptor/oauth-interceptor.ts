import { OAuth2Response } from "../model/oauth2-repsonse";
import { OccClient } from "../occ-client";
import { Interceptor } from "./interceptor";

export interface OccOauthConfig {
    oAuthServerUrl: string;
    clientId: string;
    clientSecret: string;
    grantType: string;
}

/**
 * Interceptor that fetches an OAuth2 access token from SAP Commerce
 * authorization server and injects it as a Bearer token into the request headers.
 *
 * Token is shared across all instances (static) — one token per page/process.
 * Automatically refreshes when the token is expired.
 */
export class OccOauthInterceptor implements Interceptor<OAuth2Response> {

    private static tokenPromise: Promise<string> | null = null;
    private static expiresAt: number = 0;

    private _config: OccOauthConfig;

    constructor(config: OccOauthConfig) {
        this._config = config;
    }

    private async fetchAccessToken(): Promise<string> {
        const body = new URLSearchParams({
            grant_type: this._config.grantType,
            client_id: this._config.clientId,
            client_secret: this._config.clientSecret
        });

        const response = await fetch(this._config.oAuthServerUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: body.toString()
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch access token, status: ${response.status}`);
        }

        const data: OAuth2Response = await response.json();
        // subtract 30s buffer to avoid using a token that expires mid-request
        OccOauthInterceptor.expiresAt = Date.now() + (data.expires_in - 30) * 1000;
        return data.access_token;
    }

    private isTokenExpired(): boolean {
        return Date.now() >= OccOauthInterceptor.expiresAt;
    }

    async intercept(client: OccClient<OAuth2Response>): Promise<void> {
        if (!OccOauthInterceptor.tokenPromise || this.isTokenExpired()) {
            OccOauthInterceptor.tokenPromise = this.fetchAccessToken();
        }
        const token = await OccOauthInterceptor.tokenPromise;
        client._headers.push({ "Authorization": `Bearer ${token}` });
    }
}