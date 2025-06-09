function tinhGiaiThua(value)
{
    if (value <= 1)
        return 1;
    return value * (tinhGiaiThua(value - 1));
}

alert(tinhGiaiThua(3));