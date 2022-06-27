'use strict'
let user = {
    age: 12,
    getAge() {
        return this.age;
    }
};
console.log((user.notGetAge = user.getAge)());