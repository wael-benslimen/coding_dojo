//1.
function showarr(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    return arr
}
//2.
function sum(arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
        console.log("the added number is "+ arr[i]);
        console.log("the postion of the added number is "+i);
    }
    return sum
}
//3.
function graterThan(arr, x) {
    var newarr = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > x) {
            console.log(arr[i]);
            newarr.push(arr[i]);
            
        }
    }
    return newarr
}
//ninja bonus
function graterThan(arr, x) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > x) {
            console.log(arr[i]);   
        }
        else {
            arr[i] = "no dice"
        }
    }
    return arr
}



