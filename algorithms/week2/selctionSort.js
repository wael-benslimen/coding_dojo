
function swap(arr, min, index) {
    [arr[min], arr[index]] = [arr[index], arr[min]]
}
function selectSort(arr) {

    // Variable to store index of smallest value 
    let min;
    for (i = 0; i < arr.length - 1; ++i) {
        min = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }

        // Swap if both index are different 
        if (min != i) {
            swap(arr, min, i)
        }
            
    }
    return arr
}

// Input array 
console.log(selectSort([1, 50, 8]));


