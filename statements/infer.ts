namespace Infer {
    /**
     * Abstract example
     */
    type Abstract<T> = T;

    type Generic<T> = T extends Abstract<infer U> ? U : T;

    const a: Generic<Abstract<string>> = 'string';

    /** 
     * Promise
     */

    type Awaiter<T> = T extends Promise<infer U> ? U : T;

    interface Data {
        httpStatus: number;
    }

    async function caller() {
        const data = {
            httpStatus: 500
        }

        // One type is matched for both responses!
        const one: Awaiter<Promise<Data>> = await Promise.resolve(data);
        const two: Awaiter<Data> = data;
    }
}