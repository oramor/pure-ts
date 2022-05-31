export namespace omit {
    interface Product {
        name: string;
        description: string;
        properties?: {
            [key: string]: string | number;
        }[];
    }

    // First param is an object type, second — keys from this type
    type SubProduct = Omit<Product, 'description' | 'properties'>;

    type Polyfill<T, K extends keyof T> = {
        /**
         * P like a local parameter in a loop. Operator 'as' narrow to P or never.
         * It's important that result of 'P in keyof T' is P, with which we
         * execute 'as'
         */
        [P in keyof T as P extends K ? never : P]: T[P];
    }

    const subProduct: SubProduct | Polyfill<Product, 'name' | 'description'> = {
        name: 'Car',
        //description: 'New car',
    }
}