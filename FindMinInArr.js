function findMinArr(array)
{
    let min = undefined, location = undefined;
    for (let i = 0; i < array.length; i++)
    {
        if (min == undefined || array[i] < min)
        {
            min = array[i];
            location = i;
        }
    }
    if (min == undefined)
        return -1;
    else
        return location;
}

let arr2 = [0, 0, 0, 0, 0, 0];
alert("Vị trí nhỏ nhất của mảng là " + findMinArr(arr2));