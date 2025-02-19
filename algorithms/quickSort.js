const partition=(arr) => {
    let pivot = Math.floor(arr.length/2)
    let left = arr[0]
    let right = arr[arr.length - 1]
    console.log('this is left',left);
    console.log('this is right', right);
    for (let i = 0; i < pivot; i++){
         
    }
    
    return arr
}

console.log(partition([4, 3, 9, 1, 5, 6, 0 ]));
