const partition = (arr) => {
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [pivot];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    arr = [...left, ...right];
    let index = arr.findIndex((item)=>item == pivot);
    return index;
};
console.log('after partition', partition([4, 3, 10, 1, 5, 6, 0]));


const quickSort = (arr) => {
    let left = []
    let right = []

}
