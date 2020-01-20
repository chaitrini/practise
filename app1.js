function printStuff(stuff)
{
    console.log(stuff);
}
printStuff("hello world");
function mainFunction(anotherfunction,value)
{
    anotherfunction(value);
}
mainFunction(printStuff,'hello');