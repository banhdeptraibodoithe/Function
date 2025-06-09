function mirrorArr(arr)
{
    for (let i = 0; i < arr.length / 2; i++)
    {
        let temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
}

let nums = [0, 1, 9];
console.log(nums);
mirrorArr(nums);
console.log(nums);

