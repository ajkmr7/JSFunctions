let callBackFunction = (value) => value*value; //Squares each element of inputArray

function mappingFunction(inputArray, callBackFunction){    
    let outputArray = [];
    for(index in inputArray){
        outputArray.push(callBackFunction(inputArray[index]));
    }
    return outputArray;
}

let inputArray = [2,3,5,7,11];
let mappedArray = mappingFunction(inputArray, callBackFunction);

console.log(mappedArray);