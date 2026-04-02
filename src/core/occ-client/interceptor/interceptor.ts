import { OccClient } from "../occ-client";


export interface Interceptor<T> {

    /**
     * Intercepts an HTTP request before it is executed.
     * Use this to modify the client state, e.g. inject an OAuth token into headers
     * or transform the request body.
     *
     * @param client - the {@link OccClient} instance about to execute the request
     */
    intercept(client: OccClient<T>): Promise<void>;

}