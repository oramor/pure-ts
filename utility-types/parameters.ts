export namespace Parameters {
    type F = (s: string, n: number) => void;
    const a: Parameters<F> = ['', 5];

    /**
     * Example with fabric
     */
    type Fabric = (n: number) => StringProducer | NumberProducer;

    type StringProducer = (...args: Parameters<Fabric>) => string;
    type NumberProducer = (...args: Parameters<Fabric>) => number;

    const stringFabric: Fabric = (n: number) => {
        const stringMaker: StringProducer = (n: number) => n.toString();
        return stringMaker;
    }
}