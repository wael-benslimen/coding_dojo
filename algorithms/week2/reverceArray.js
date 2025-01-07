//STEPS
/*
1.we need to get the array to reverse it from the client
2.the code will run trought half of the length of the array
3.the code will store the first value we want to switch to a temporary variable
4.the code will reverse the last value with the first
5.the code will put the value stored in the tempory into the place of the last value
6.we will repeat this process until we reach the middle of the array
7.the reversed array will be returned and displayed
/
*/



//t-diagram
/*
    variable           value
        arr              the array provided by the client
        temp             the temporary varibale holding the first value
        x                the reverse conter startig at the end of the array

*/


// first method
function reverceArray(arr) {
    x = arr.length - 1
    for (let i = 0; i < arr.length/2 ; i++){
        let temp = arr[i]
        arr[i] = arr[x]
        arr[x] = temp
        x--
    }
    return arr
}

// second method
function reverceArray2(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}


var arr1 = [1, 2, 3]
console.log(reverceArray(arr1));

var arr2 = ["a", "b"]
console.log(reverceArray2(arr2));

