let callBackFunction = (value) => {
    if(value < 2)
        return false;
    for(let itr=2;itr<value;itr++){
        return !(value%itr==0);
    }
    return true;
}
//Checks whether a number is prime

function filteringFunction(inputArray, callBackFunction){
    let outputArray = [];
    for(element of inputArray){
        if(callBackFunction(element))
            outputArray.push(element);
    }
    return outputArray;
}

let inputArray = [1,2,3,4,5,6,7,8,9,10];
let filteredArray = filteringFunction(inputArray, callBackFunction);

console.log(filteredArray);