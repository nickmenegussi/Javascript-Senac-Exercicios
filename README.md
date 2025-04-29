function plusMinus(arr) {
    let positiveNumbers = 0
    let negativeNumbers = 0
    let zeroNumbers = 0
    let total = arr.length

    // iterate through the list
    // separate the positive integers, negative integers, and zeros
    // count how many are positive, negative, and zero, then divide by the list length

    for (let x = 0; x < arr.length; x++) {
        if(arr[x] > 0){
            positiveNumbers++
        } else if (arr[x] < 0){
            negativeNumbers++
        } else {
            zeroNumbers++
        }
    }
    return positiveNumbers / total.toFixed(6), negativeNumbers / total.toFixed(6)  return zeroNumbers / total.toFixed(6)

}

hackrank exercises 01 week preparation
