/* 
 Необходимо написать функцию, которая удаляет все ключи из первого объекта,
 которые есть во втором объекте.
 */

interface IA {
  a: number;
  b: string;
}

interface IB {
  a: number;
  c: boolean;
}

const a: IA = {
  a: 5,
  b: 'ddd',
};
const b: IB = {
  a: 10,
  c: true,
};

const differenceValues = <T extends {}, K extends {}>(
  firstObj: T,
  secondObj: K
): Partial<T> =>
  (Object.keys(firstObj) as (keyof T)[])
    .filter((key) => !(key in secondObj))
    .reduce((acc, key) => {
      acc[key] = firstObj[key];
      return acc;
    }, {} as Partial<T>);

console.log(differenceValues(a, b));
