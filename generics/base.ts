interface Abstract {
    name: string;
}

interface One {
    height: number;
}

interface Two {
    width: number;
}

interface Wrong {
    price: number;
}

type Generic<T extends One | Two> = Abstract & T;

const obj: Generic<Two> = {
    name: 'Some',
    width: 5
}