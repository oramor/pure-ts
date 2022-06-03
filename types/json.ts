type JsonType = { [key: string]: string | number | boolean | JsonType | JsonType[] };

const empty: JsonType = {};

const flat: JsonType = {
    str: 'value',
    num: 5,
    bool: true
}

const folded: JsonType = {
    obj: {
        flat
    }
}

const arr: JsonType = {
    obj: [
        flat,
        folded
    ]
}

const complex: JsonType = {
    flat,
    folded,
    arr
}

export default JsonType;