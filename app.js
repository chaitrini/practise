console.log(__filename);
console.log(__dirname);

function printHello()
{
    console.log("this represents after 5 sec");
}
setinterval(printHello,5000);