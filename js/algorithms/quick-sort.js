const arr = [-1, 4, -5, 6, 2, -3, 0, 10, -13, 14, 52, -2, 33, 23, 17, -4, 46, 39, -20, 43, 53, 84, 1, 5];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}