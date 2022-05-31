export namespace readonly {
    type Config = Readonly<{
        port: number;
        domain: string;
    }>

    interface IConfig {
        readonly port: number;
        readonly domain: string;
    }

    type Older<T extends object> = {
        readonly [K in keyof T]: T[K];
    }
}