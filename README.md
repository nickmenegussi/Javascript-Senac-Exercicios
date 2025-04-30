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

function miniMaxSum(arr) {
    let max = 0
    let min = 0
    let sum = 0
    
    for(let x = 0; x < arr.length; x++){
        console.log(arr[x] < sum ? arr[x] < sum : arr[x])
        console.log(arr[x] > sum ? arr[x] > sum : arr[x])

        sum += arr[x]
        if(x < 4){
            min += arr[x]
        }

        if(x > 0){
            max += arr[x]
        }
    }
    console.log(`${min} ${max}`)

}
miniMaxSum([7,69, 2,221,8974])
