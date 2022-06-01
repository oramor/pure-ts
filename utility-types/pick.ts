export namespace pick {
    interface Product {
        name: string;
        description: string;
        properties?: {
            [key: string]: string | number;
        }[];
    }

    // First param is an object type, second — keys from this type
    type SubProduct = Pick<Product, 'name' | 'description'>;

    type Polyfill<T, K extends keyof T> = {
        [P in K]: T[K];
    }

    const subProduct: SubProduct | Polyfill<Product, 'name' | 'description'> = {
        name: 'Car',
        description: 'New car',
    }
}