export type DeepReadonly<T> = T extends object
  ? {
      readonly [Prop in keyof T]: DeepReadonly<T[Prop]>;
    }
  : T;

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`
