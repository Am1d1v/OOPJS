





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

/*

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
//account.lastTransaction = 1000;
//console.log(account.transactions);

class Person{

    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

    printAge(){
        console.log(2023 - this.birthYear);
    }

    get age(){
        return 2023 - this.birthYear;
    }

    set name(onlyName){
        if(onlyName.includes(' ')){
            console.log('Write only your name');
        } else {
            console.log(`Greeting, ${onlyName}`);
        }
    }
}

const Dima = new Person("Dima", 1990);
//console.log(Dima.age);

*/



class Person{
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printAge(){
        return 2023 - this.age;
    }
}


class filmAccount extends Person {
    constructor(name, age){
        super(name, age);

        this.fimaGenres = ['Horror', 'Comedy'];
    }
}


const difinitePerson = new filmAccount("Dima", 1990);
console.log(difinitePerson);