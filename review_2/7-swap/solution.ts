/* 
Написать функцию, которая меняет местами ключи и значения 
в объекте. При этом они там одного типа.
 */

const obj = {
  a: 1,
  b: 2,
} as const;

const swapKeysAndValues = <T extends Record<string, string | number>>(
  data: T
): { [K in keyof T as T[K]]: K } => {
  const result: any = {};

  for (const key in data) {
    const value = data[key];
    result[value] = key;
  }

  return result as { [K in keyof T as T[K]]: K };
};
const res = swapKeysAndValues(obj);

/* {
  1: a,
  2: b,
};
*/
console.log(res);
