"use strict";
/*
Написать функцию, которая меняет местами ключи и значения
в объекте. При этом они там одного типа.
 */
const obj = {
    a: 1,
    b: 2,
};
const swapKeysAndValues = (data) => {
    const result = {};
    for (const key in data) {
        const value = data[key];
        result[value] = key;
    }
    return result;
};
const res = swapKeysAndValues(obj);
/* {
  1: a,
  2: b,
};
*/
console.log(res);
