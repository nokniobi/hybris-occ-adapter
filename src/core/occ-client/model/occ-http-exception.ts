import { ErrorListWsDTO, ErrorWsDTO } from "../../generated/types";

export class OccHttpException extends Error {

    response: ErrorListWsDTO | unknown;

    constructor(message: string, public status: number, response?: ErrorListWsDTO) {
        super(message);
        this.name = "OccHttpException";
        this.response = response;
    }
}