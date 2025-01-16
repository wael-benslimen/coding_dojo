// create a machine that takes data from the client in the form of a list
function missingValue(arr) {
    // we create a new sorted list called new_arr 
    new_arr = arr.sort()
    // we create a for loop going through the list
    for (let i = 0; i < arr.length - 1; i++) {
        // we create a new variable and give it the value of an item in the list + 1
        x = new_arr[i] + 1
        // we test if the value of x is eaqual to the value of the item in the list + 1 in the current ittaration of the loop
        if (new_arr[i + 1] != x) {
            // if its not we return the missing item
            return new_arr[i] + 1
        }
    }
    // else we return null
    return null
}
/*
T_Diagram
arr = array given by the client
new_arr = sorted array
x = new sorted array

*/


let arr = [3, 0, 1]
console.log(missingValue(arr));


let arr1 = [3, 0, 1, 2]
console.log(missingValue(arr1));


let arr3 = [2, 4, 0, -3, -2, 1]
console.log(missingValue(arr3));


let arr4 = [5, 2, 7, 8, 4, 9, 3]
console.log(missingValue(arr4));

