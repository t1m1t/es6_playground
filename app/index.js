
class Greet {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        return `Hello ${this.name}`;
    }

    sayGoodbye(){
        return `I'll never let go ${this.name}`;
    }
}

class BetterGreeting extends Greet {
    constructor(name, lname) {
        super(name);
        this.lastName = lname
    }

    alertHello(){
        alert(`What Up, ${this.name} ${this.lastName}`);
        console.log("alert done");
    }

    sayHello(){
        return super.sayHello() + ` ${this.lastName}`;
    }
}

const heather = new Greet('Bill');
const jack = new Greet('Jack');

const bob = new BetterGreeting('Bob', 'Bobby');

console.log(heather.sayHello());
console.log(heather.sayGoodbye());

console.log(jack.sayHello());
console.log(jack.sayGoodbye());

console.log(bob.sayHello());

bob.alertHello();
