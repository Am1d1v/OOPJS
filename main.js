




const Person = function(name, birthYear){
    this.name = name;
    this.birthYear = birthYear;

    
};

const definitePerson = new Person('Dima', 1980);
console.log(definitePerson);
console.log(definitePerson instanceof Person);

Person.prototype.printAge = function(){
    console.log(2023 - this.birthYear);
}
/*

console.log(Person.prototype);

definitePerson.printAge();
console.log(definitePerson.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(definitePerson));

*/

console.log(definitePerson.__proto__);
console.log(definitePerson.__proto__.__proto__);
console.log(definitePerson.hasOwnProperty('name'));
console.dir(Person.prototype.constructor);

const numbers = [1, 2, 3, 4, 5, 6];
const numbersArray = [1, 4, 3, 9, 5, 6, 5, 2];
console.log(numbers.__proto__);
console.log(numbers.__proto__ === Array.prototype);

Array.prototype.uniqueElements = function(){
    return [...new Set(this)]
}

console.log(numbersArray.uniqueElements());











