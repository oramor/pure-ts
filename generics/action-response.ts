export namespace ActionResponse {
    type JsonObject = { [key: string]: string | number | JsonObject };

    type AbstractResponse = {
        httpStatus: number;
    }

    interface PageResult {
        placeholders: {};
    }

    interface DataResult {
        json: JsonObject;
    }

    type ActionResponse<T extends DataResult | PageResult> = Promise<AbstractResponse & T>;

    const obj = {
        httpStatus: 500,
        placeholders: {}
    }

    const rs: ActionResponse<PageResult> = Promise.resolve(obj);
}