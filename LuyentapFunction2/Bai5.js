function findMin(num1, num2, num3)
{
    return (num1 < num2) ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3);
}

alert(findMin(0, 1, -6));