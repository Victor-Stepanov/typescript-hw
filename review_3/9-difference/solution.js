"use strict";
/*
 Необходимо написать функцию, которая удаляет все ключи из первого объекта,
 которые есть во втором объекте.
 */
const a = {
    a: 5,
    b: 'ddd',
};
const b = {
    a: 10,
    c: true,
};
const differenceValues = (firstObj, secondObj) => Object.keys(firstObj)
    .filter((key) => !(key in secondObj))
    .reduce((acc, key) => {
    acc[key] = firstObj[key];
    return acc;
}, {});
console.log(differenceValues(a, b));
