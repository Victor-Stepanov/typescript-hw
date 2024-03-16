/* Написать функцию получения нужных данных из объекта  */

const user = {
  name: 'Vasiliy',
  age: 8,
  skills: ['typescript', 'javascript'],
} as const;

const pickObjectKeys = <T extends {}, K extends keyof T>(data: T, key: K[]) =>
  key.reduce((acc, val) => {
    const result: { [Property in K]: T[K] } = { ...acc } as {
      [Property in K]: T[K];
    };

    result[val] = data[val];

    return result;
  }, {}) as { [Property in K]: T[K] };

const result = pickObjectKeys(user, ['age', 'skills']);
console.log(result);
/* 
 {
  age: 8,
  skills: ["typescript", "javascript"],
 }
 
 */
