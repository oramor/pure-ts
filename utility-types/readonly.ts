export namespace readonly {
    type Config = Readonly<{
        port: number;
        domain: string;
    }>

    interface IConfig {
        readonly port: number;
        readonly domain: string;
    }
}