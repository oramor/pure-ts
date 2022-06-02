export namespace ReturnType {
  type F = (arg: any) => number;
  type R = ReturnType<F>;
  const a: R = 5;

  /**
   * Polyfill
   */

  type MyReturnType<T> = T extends (...args: any) => infer U ? U : never;
  const b: MyReturnType<F> = 5;
}
