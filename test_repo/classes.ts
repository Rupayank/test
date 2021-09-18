//Abstract class cannot be instantiated but can be inherited
abstract class Animal{
    name: string;
    constructor(theName:string) {
        this.name=theName;
    }
    walk(dist:number)
    {
        console.log(`It can walk ${dist} meter.`)
    }
}
// let ani=new Animal("Rob");

class Cat extends Animal{
    constructor(theName:string) {
        super(theName);
    }

    walk(dist:Number)//Overriding
    {
        console.log(`${this.name} can't walk much coz she is a cat`);
    }
}
let cat = new Cat("ruby");
cat.walk(2);