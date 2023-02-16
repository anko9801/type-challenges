type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K,
    value: V,
  ): Chainable<Omit<T, K> & { [key in K]: V }>
  get(): T
}
