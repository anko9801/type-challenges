type Chainable<T = {}> = {
  option(
    key: string,
    value: any,
  ): Chainable<Omit<T, typeof key> | Record<typeof key, typeof value>>
  get(): T
}
