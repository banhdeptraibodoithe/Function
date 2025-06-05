function compareTwoNums(a, b)
{
    if (a > b)
    {
        alert("Tham số thứ nhất lớn hơn tham số thứ hai");
    }
    else
    {
        return a + b;
    }
}

let num1 = +prompt("Nhập số thứ nhất: ");
let num2 = +prompt("Nhập số thứ hai: ");
let a = compareTwoNums(num1, num2);
alert(a);