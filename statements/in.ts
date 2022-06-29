namespace In {
  interface Subject {
    name: string;
    age: number;
  }

  type test<T extends string | number | symbol> = {
    [P in keyof T]: T[P];
  };
}

namespace InTransform {
  type T<K extends string, V> = { [P in K]: V };

  const obj: T<string, number> = {
    age: 23,
  };
}
