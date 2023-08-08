





/*

class Person{

    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

    printAge(){
        console.log(2023 - this.birthYear);
    }
}

const Dima = new Person("Dima", 1990);
console.log(Dima.printAge());

console.log(Dima.__proto__ === Person.prototype);

*/

// Setters & Getters

const account = {
    owner: "Dima",
    transactions: [100, -200, 300],

    get lastTransaction(){
        return this.transactions.slice(-1).pop();
    },

    set lastTransaction(transaction){
        this.transactions.push(transaction);
    }
}

//console.log(account.getLastTransaction());
account.lastTransaction = 1000;
console.log(account.transactions);


