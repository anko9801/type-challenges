declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T],
): Promise<{ [k in keyof T]: MyAwaited<T[k]> }>
