interface I {
  name: string;
}

type Constr = new (p: string) => Test;

abstract class Test {
  public arr: I[];
  p: string;
  constructor(...args: ConstructorParameters<Constr>) {
    this.p = args[0];
  }
}
