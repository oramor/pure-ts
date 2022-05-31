export namespace required {
    interface Product {
        name: string;
        description: string;
        properties?: {
            [K: string]: string | number;
        }[];
    }

    const productItem = {
        name: 'Cup',
        description: 'Cup for tea',
        properties: [
            {
                weight: '100 g'
            }
        ]
    }
    // All properties becomes required
    const a: Required<Product> = productItem

    type CustomPartial<T> = {
        [K in keyof T]-?: T[K];
    }

    const b: CustomPartial<Product> = productItem;
}
