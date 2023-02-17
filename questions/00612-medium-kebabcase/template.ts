type IsLetter<S extends string> = Uppercase<S> extends Lowercase<S>
  ? false
  : true
type IsCapital<S extends string> = IsLetter<S> extends true
  ? S extends Uppercase<S>
    ? true
    : false
  : false
type KebabCase<
  S extends string,
  IsFirst extends boolean = true,
> = S extends `${infer L}${infer R}`
  ? IsFirst extends true
    ? `${Lowercase<L>}${KebabCase<R, false>}`
    : IsCapital<L> extends true
    ? `-${Lowercase<L>}${KebabCase<R, false>}`
    : `${L}${KebabCase<R, false>}`
  : ''
