/*
T-diagram
arr  =  the list given by the client
temp = a temporary variable used in the swaping prosidure
*/

// we create a machine that takes and array as a parameter
const bubbleSort = (arr) => {
    // then we run through the list twice
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
        console.log(arr[i]);
        for (let j = 0; j < arr.length - i; j++) {
            // if an item is bigger than the item next to it they will swap places
            if (isNaN(arr[j + 1])) {
                if (String(arr[j]) > arr[j + 1]) {
                    // declare a var temp to hold the value of the first item for it not to get lost
                    temp = arr[j]
                    // the swaping procedure go's as follows we put the second value into the first item place 
                    arr[j] = arr[j + 1]
                    // than we put the value of the first item that we stored in the var temp into the second's place
                    arr[j + 1] = temp
                }
            }
            else {
                if (arr[j] > arr[j + 1]) {
                    // declare a var temp to hold the value of the first item for it not to get lost
                    temp = arr[j]
                    // the swaping procedure go's as follows we put the second value into the first item place 
                    arr[j] = arr[j + 1]
                    // than we put the value of the first item that we stored in the var temp into the second's place
                    arr[j + 1] = temp
                }
            }
        }
    }
    // return the list after it got sorted
    return arr
}



console.log(bubbleSort([5, 3, 4, 'x', 12, 1, "a", "o", 7, "12"]));
