export namespace In {
    interface Subject {
        name: string;
        age: number;
    }

    type test<T extends string | number | symbol> = {
        [P in keyof T]: T[P];
    }
}