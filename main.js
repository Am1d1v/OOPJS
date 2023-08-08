




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

console.log(definitePerson.__proto__.__proto__);
console.log(definitePerson.hasOwnProperty('name'));
















