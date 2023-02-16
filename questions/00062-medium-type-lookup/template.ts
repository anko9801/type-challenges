type LookUp<U, T extends string> = U extends Record<'type', string>
  ? U['type'] extends T
    ? U
    : never
  : never
