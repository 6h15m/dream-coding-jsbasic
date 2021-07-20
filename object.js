// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const haeil = { name: 'haeil', age: 4 };
print(haeil);

// with JavaScript magic (dynamically typed language)
// can add properties later
haeil.hasJob = true;
console.log(haeil.hasJob);

// can delete properties later
delete haeil.hasJob;
console.log(haeil.hasJob);

// 2. Computed properties
// key should be always string
console.log(haeil.name);
console.log(haeil['name']);
haeil['hasJob'] = true;
console.log(haeil.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(haeil, 'name');
printValue(haeil, 'age');

// 3. Property value shorthand
const person1 = { name: 'levi', age: 2 };
const person2 = { name: 'kageyama', age: 3 };
const person3 = { name: 'saiki', age: 4 };
const person4 = new Person('dazai', 20);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in haeil);
console.log('age' in haeil);
console.log('love' in haeil);
console.log(haeil.love);

// 6. for..in vs for..of
// for (key in obj)
for (key in haeil) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'levi', age: '20' };
const user2 = user;
user2.name = 'saiki';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);