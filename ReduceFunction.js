let callBackFunction = (total, value) => {
    return total+value;    
}//Adds all inputArray elements
function reducingFunction(inputArray, callBackFunction){
    let total = 0;
    for(element of inputArray)
        total = callBackFunction(total,element);
    return total;
}
let inputArray = [2,4,6,8,10];
let output = reducingFunction(inputArray, callBackFunction);
console.log(output);
