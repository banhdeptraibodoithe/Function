let products;
getStoreLocal();
displayProducts();
let flag = true;
let checkEdit = 0;

function displayProducts()
{
    let html = "";
    for (let i = 0; i < products.length; i++)
    {
        html += `
        <tr>
            <th>${products[i]}</th>
            <th><button id = ${i} onclick = editProducts(${i})>Sửa</button></th>
            <th><button onclick = removeProducts(${i})>Xoá</button></th>
        </tr>`
    }
    document.getElementById("result").innerHTML = html;
    document.getElementById("display").innerHTML = "Các sản phẩm hiện có: " + products.length + " sản phẩm";
}
function addProducts()
{
    if (!flag)
    {
        alert("Không thể thêm mặt hàng khi đang thực hiện sửa đổi");
        return;
    }
    if (document.getElementById("product").value != "")
    {
        for (let i = 0; i < products.length; i++)
        {
            if (document.getElementById("product").value.toLowerCase() == products[i].toLowerCase())
            {
                alert("Mặt hàng đã tồn tại không thể thêm");
                document.getElementById("product").value = "";
                return;
            }
        }
        products.push(document.getElementById("product").value);
        updateStoreLocal();
    }
    else
        alert("Không thể đưa mặt hàng rỗng vào hệ thống");
    document.getElementById("product").value = "";
    searchProducts();
    displayProducts();
}
function editProducts(index)
{
    if (flag)
    {
        checkEdit = index;
        document.getElementById("title").innerHTML = "Thay đổi mặt hàng mới cho " + products[index];
        document.getElementById("product").placeholder = "Nhập giá trị muốn thay đổi";
        document.getElementById("product").value = products[index];
        document.getElementById("edit").innerHTML = `<button  onclick= editProducts(${index})>Lưu sản phẩm</button>`;
        flag = false;
    }
    else{
        if (checkEdit != index)
        {
            alert("Vui lòng lưu sửa đổi hiện tại trước khi sửa đổi sản phẩm khác");
            return;
        }
        if (document.getElementById("product").value == "")
        {
            alert("Không thể đưa mặt hàng rỗng vào hệ thống");
            return;
        }
        for (let i = 0; i < products.length; i++)
        {
            
            if (document.getElementById("product").value.toLowerCase() == products[i].toLowerCase())
            {
                alert("Mặt hàng đã tồn tại không thể sửa đổi");
                document.getElementById("title").innerHTML = "Quản Lý Sản Phẩm";
                document.getElementById("product").placeholder = "Tên sản phẩm ...";
                document.getElementById("edit").innerHTML = `<button id = add onclick= addProducts()>Thêm vào kho</button>`;
                flag = true;
                document.getElementById("product").value = "";
                displayProducts();
                return;
            }
        }
        products[index] = document.getElementById("product").value;
        updateStoreLocal();
        document.getElementById("title").innerHTML = "Quản Lý Sản Phẩm";
        document.getElementById("product").placeholder = "Tên sản phẩm ...";
        document.getElementById("edit").innerHTML = `<button id = add onclick= addProducts()>Thêm vào kho</button>`;
        flag = true;
        document.getElementById("product").value = "";
        displayProducts();
    }
}
function removeProducts(index)
{
    if (!flag)
    {
        alert("Không thể xoá mặt hàng khi đang thực hiện sửa đổi");
        return;
    }
    if (confirm("Bạn có muốn xoá mặt hàng " + products[index]))
    {
        products.splice(index, 1);
        localStorage.removeItem(index);
        updateStoreLocal();
        searchProducts();
        displayProducts();
    }
}
function searchProducts()
{
    let input = document.getElementById("search").value;
    if (input == "")
    {
        document.getElementById("resultSearch").innerHTML = "";
        return;
    }
        
    let html = "<h3>Các sản phẩm phù hợp là:</h3>";
    for (let i = 0; i < products.length; i++)
    {
        let temp = products[i].toLowerCase();
        if (temp.includes(input.toLowerCase()))
        {
            html += `<h4>${products[i]}</h4>`;
        }
    }
    document.getElementById("resultSearch").innerHTML = html;
}
function updateStoreLocal()
{
   let data = JSON.stringify(products);
   localStorage.setItem("products", data); 
}
function getStoreLocal()
{
    let data = localStorage.getItem("products");
    if (data)
    {
        products = JSON.parse(data);
    }
    else
    {
        products = [];
        updateStoreLocal();
    }
}