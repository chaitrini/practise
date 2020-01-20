console.log("user 1 has requested");
setTimeout(callBack,5000)


console.log("user 2 has requested");
setTimeout(callBack,5000)

console.log("user 3 has requested");
setTimeout(callBack,5000)

 
function callBack()
{
    console.log("the request is processing with in 5 min"); 
}
