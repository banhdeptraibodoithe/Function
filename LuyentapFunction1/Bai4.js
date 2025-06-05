function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    return result;
}
let result = 0;
alert("Giá trị của result trước khi gọi hàm là: "+ result);

result = addNumbers();
alert("Giá trị của result sau khi gọi hàm là: "+ result);