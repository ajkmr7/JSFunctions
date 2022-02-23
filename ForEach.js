let callBackFunction = (value) => {
    return value * value * value;
}//Cubes all inputArray elements

function forEachFunction(inputArray, callBackFunction){
    for(element of inputArray){
        outputArray.push(callBackFunction(element));
    }
}

let inputArray = [3,6,9,12,15];
let outputArray = forEachFunction(inputArray, callBackFunction);
console.log(outputArray);