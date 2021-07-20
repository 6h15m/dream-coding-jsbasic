// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const puppy = {
    name: 'manbok',
    color: 'black',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(puppy);
console.log(json);

json = JSON.stringify(puppy, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(puppy, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'haeil' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(puppy);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
puppy.jump();
// obj.jump(); error!

console.log(puppy.birthDate.getDate());
console.log(obj.birthDate.getDate());