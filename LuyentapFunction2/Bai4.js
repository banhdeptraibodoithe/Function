function isNum(char)
{
    let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    if (num.includes(char))
        return true;
    return false;
}

alert(isNum("8"));