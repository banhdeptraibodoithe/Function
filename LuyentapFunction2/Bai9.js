function check(arr, char)
{
    let count = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == char)
            count++;
    }
    if (count != 0)
        return count;
    return -1;
}

let str = "is my name";
alert(check(str, "b"));