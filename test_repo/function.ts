function greet(name:string,age:number):
void
{
    console.log(name,age);
}
greet("RK",20);

//When one of the parameters is optional & unknown is default param
function opGreeet(name:string="Unknown",age?:number):
void
{
    console.log(name,age);
}
opGreeet("DK");