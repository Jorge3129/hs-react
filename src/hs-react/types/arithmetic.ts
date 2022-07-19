
export type LengthOfTuple<T extends any[]> = T extends { length: infer L } ? L : never;

export type DropFirstInTuple<T extends any[]> = ((...args: T) => any) extends (arg: any, ...rest: infer U) => any ? U : T;

export type LastInTuple<T extends any[]> = T[LengthOfTuple<DropFirstInTuple<T>>];

type A = LastInTuple<["a", "b", "c"]>
let a: LastInTuple<["a", "b", "c"]>;
