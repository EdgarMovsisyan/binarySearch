let arr1 = [105, 76, 70, 45, 44, 44, 36, 32, 31, 28, 20, 20, 15, 87];   //14

function BubbleSort(inputArray) {
    let len = inputArray.length;

    for(let i = 0; i < inputArray.length; ++i) {
        for(let j = 1; j < inputArray.length; ++j) {
            if(inputArray[j - 1] > inputArray[j]) {
                Swap(inputArray, j - 1, j);
            }
        }
    }

    return inputArray;
}

function Swap(inputArray, left, right) {
    //let temp = inputArray[right];
    inputArray[left] += inputArray[right];
    inputArray[right] = inputArray[left] - inputArray[right];
    inputArray[left] -= inputArray[right];
}

console.log(BubbleSort(arr1));


function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;

    while(end >= start) {
        let m = Math.floor((start + end) / 2);

        if(arr[m] === value) {
            return "index - " + m;
        } else if(arr[m] < value) {
            start = m + 1;
        } else {
            end = m - 1;
        }
    }
    return "no element";
}

console.log(binarySearch(arr1, 105));
console.log(binarySearch(arr1, 36));
console.log(binarySearch(arr1, 1515));