type Includes<T extends readonly unknown[], U> = T extends [infer L, ...infer R]
  ? (<V>() => V extends L ? 1 : 0) extends <V>() => V extends U ? 1 : 0
    ? true
    : Includes<R, U>
  : false;
