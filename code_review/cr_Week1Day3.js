//1. add two numbers
// descreption: accepts tow numbers as input params, add them and returns the resault

function addNumbers(x, y) {
    return x+y
}
console.log(addNumbers(5, 10))

//2. substruct two numbers
// description: substruct the second number from the first and return the resault

function substructNumbers(x, y) {
    return x-y
}
console.log(substructNumbers(5, 10))

//3. check even or odd
// description: check if a number is  even or odd
function iseven(x) {
    if (x % 2 === 0) {
        return x + " is even"
    }
    else {
        return x + " is odd"
    }
}
console.log(iseven(4))
console.log(iseven(7))

//4. find the largest Number
// description will accept a list of numbers and return the largest one

function FindLargest(arr) {
    var x = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x) {
            x = arr[i]
        }
        
    }
    return x
}

console.log(FindLargest([3, 5, 7, 2, 9]))

//5. loop from 1 to 16

for (var i = 1; i < 17; i++){
    console.log("current loop index: ", i)
    i += 3
}

/*
T_diagram
i = 1, 4, 5, 8, 9, 12, 13, 16, 17

the console log is :

current loop index: 1
current loop index: 5
current loop index: 9
current loop index: 13
*/

//6. push element into array with variable
// discription: adds an element (stored in a variable) to the end of an array

function puchElement(arr) {
    var x = 5
    arr.push(x)
    return arr
}

console.log(puchElement([1, 2, 3]))

//7. pop Element from array with variable
// discriptionb: remove the last element from array and store it

function popElement(arr) {
    var x = arr.pop()
    console.log(x + " is the removed element ")
    return(arr)
}
console.log(popElement([1, 2, 3]))

//8. count numbers less than 4 in an array
// description declare an arra of nabers

var arr = [1, 4, 7, 6, 2, 1]
var count = 0

function countless4(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 4)
        count ++
    }
}
countless4(arr)

console.log(count)

//9. 