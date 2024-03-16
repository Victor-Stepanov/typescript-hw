"use strict";
/* Написать функцию получения нужных данных из объекта  */
const user = {
    name: 'Vasiliy',
    age: 8,
    skills: ['typescript', 'javascript'],
};
const pickObjectKeys = (data, key) => key.reduce((acc, val) => {
    const result = Object.assign({}, acc);
    result[val] = data[val];
    return result;
}, {});
const result = pickObjectKeys(user, ['age', 'skills']);
console.log(result);
/*
 {
  age: 8,
  skills: ["typescript", "javascript"],
 }
 
 */
