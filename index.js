module.exports = function greatestProductOfNumbers(list){
    let product;
    let sortedList = list.sort((a,b) => b-a);

    if(allIntsLessThanOrEqualToZero(sortedList)){
        product = getProductOfGreatestInts(sortedList);
    } else {
        let productWithNegs = getProductOfMostNegInts(sortedList, 2) * getProductOfGreatestInts(sortedList, 1);
        if(productWithNegs > getProductOfGreatestInts(sortedList, 3)){
            product = productWithNegs;
        } else {
            product = getProductOfGreatestInts(sortedList, 3);
        }
    }
    
    return product;
}

function allIntsLessThanOrEqualToZero(sortedList){
    if(sortedList[0] <= 0){
        return true;
    }
    return false;
}

function getProductOfGreatestInts(sortedList, numOfIntsToMultiply = 3){
    let product;

    for(let i = 0; i<numOfIntsToMultiply; i++){
        if(i === 0){
            product = sortedList[i];
        } else {
            product = product * sortedList[i];
        }
    }

    return product;
}

function getProductOfMostNegInts(sortedList, numOfIntsToMultiply = 2){
    const mostNegIntIndex = sortedList.length - 1;
    let nextMostNegIntIndex = mostNegIntIndex - 1;
    let product;

    for(let i = 0; i<numOfIntsToMultiply; i++){
        if(i===0){
            product = sortedList[mostNegIntIndex];
        } else {
            product = product * sortedList[nextMostNegIntIndex];
            nextMostNegIntIndex--;
        }
    } 

    return product;
}