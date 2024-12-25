// first
function alwaysHungry(arr) {
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.log("yummy");
        } else {
            x++
        }
    }
    if (x == arr.length) {
        console.log("im hungry");

    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// second
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff)
            filteredArr.push(arr[i])
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
// third
function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    var avg = sum / arr.length
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
// forth
function reverse(arr) {
    j = arr.length
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        j--
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
// fifth
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

