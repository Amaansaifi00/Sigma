// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("Amaan", 20);
// let p2 = PersonMaker("Ali", 21);



// Constructor

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`hi my name is ${this.name}`);
// };

// let p1 = new Person("Amaan", 20);
// let p2 = new Person("Ali", 21);


class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hi my name is ${this.name}`);
    }
}

let p1 = new Person("Amaan", 21);
