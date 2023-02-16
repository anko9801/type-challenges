type MyCapitalize<S extends string> = S extends `${infer First}${infer R}`
  ? `${Uppercase<First>}${R}`
  : S
