function greeting(person:string) {
    return "Hello there again, "+person;
}
var user="Mother";
console.log(greeting("RK"));
let check:boolean=true;
let arr:number[]=[1,22,13];
let arr2:Array<number>=[33,44,55];
let salute:string="Good Morning";
let anything:any=4;
anything="Something";
anything=[11,22,121];

//Return types
function again(name:string):void{
    console.log(name);
}
again("Yo");

//Enum
let statusCode:number=2;
enum allCodes{up,down,left,right};
if(statusCode===allCodes.left)
{
    console.log(`Go left`)
}
else
{
    console.log("change statusCode & check")
}
