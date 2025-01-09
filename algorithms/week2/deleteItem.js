/**
 * steps
 1. we need to get the list and the position of the value we want to delete as information from the user
 we asign the value of the item to a temporary variable
 2. than we test if the position is positive and is less then the list s length
 3. we loop through the list and change the place of the designated value to the end of the list
 4. we delete the item and save its value
 5. we return the deleted value
 6. else we return null



 T_diagram
 
 
 */


function removeIndex(arr, idx) {
    if (idx > 0 && idx < arr.length) {
        temp = arr[idx]
        for (let i = idx; i < arr.length; i++) {
            arr[i] = arr[i + 1]

        }
        arr[arr.length - 1] = temp
        let deleteditem = arr.pop()
        console.log(arr);
        return deleteditem
    }
    else {
        return null
    }

}


console.log("the remover item value is", removeIndex([1, 2, 3, 4, 5], 2));
   