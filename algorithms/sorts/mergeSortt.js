
const mergeSorted = (arr1, arr2) => {
    let sortedArr = []
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sortedArr.push(arr1.shift())
        } else {
            sortedArr.push(arr2.shift())
        }
    }
    return [...sortedArr, ...arr1, ...arr2]
}

const mergeSort = (arr) => {
    if (arr.length > 1) {
        let pivot = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, pivot))
        let right = mergeSort(arr.slice(pivot))
        console.log(left, right);
        return mergeSorted(left, right)
    }
    return arr
}

console.log(mergeSort([1, 2, 8, 3, 8, 9]));


