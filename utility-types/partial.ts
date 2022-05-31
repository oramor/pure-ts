export namespace partial {
    interface Product {
        name: string;
        description: string;
        properties?: {
            [key: string]: string | number;
        }[];
    }

    // All properties becomes optional
    const a: Partial<Product> = {}

    type CustomPartial<T> = {
        [K in keyof T]?: T[K];
    }

    const b: CustomPartial<Product> = {};
}
