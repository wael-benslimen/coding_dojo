/**
 steps
 1. we get a list we want to get the positon of the smalest value from the client
 2. we check if the list is empty
 3. if the list is empty we return the value -1
 4. if the list is not empty we create a variable and asign the index of the first item in the list to it whitch is 0
 5. we loop the list comparing its values
 6. if the item s value is less then the value of the item at the postion we asined in the variable than we change the value of the varible to the position of the item 
 7. we return the resault of the value of the variable whitch is the index of the smalest value item


 t_diagram
    variable    |   value
    arr         | the list given by the client
    smalest     | the value of the index of the smalest value in the array

 */

function indexOfMinVal(arr) {
    if (arr.length > 0) {
        let smalest = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[smalest]) {
                smalest = i
            }

        }
        return smalest
    }
    else {
        return -1
    }
}




var nums1 = [5, 2, 3]
var nums2 = []
var nums3 = [7, 4, 2, 2, 8, 4]
var nums0 = [1, 5, 6]

var result = indexOfMinVal(nums1)
console.log(result);

var result1 = indexOfMinVal(nums2)
console.log(result1);


var result2 = indexOfMinVal(nums3)
console.log(result2);

var result3 = indexOfMinVal(nums0)
console.log(result3);
