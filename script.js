
//ID variables
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let searchBytitle = document.getElementById("searchBytitle");
let searchBycategory = document.getElementById("searchBycategory");
let update = document.getElementById("update");
let Delete = document.getElementById("delete");

//Functions

//getTotal

function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = "green";

    } else {
        total.innerHTML = '';
        total.style.backgroundColor = "red";
    }

}

//create product

let dataProduct;

if (localStorage.productArray != null) {
    dataProduct = JSON.parse(localStorage.productArray)
} else {
    dataProduct = []
}

submit.onclick = function () {
    let newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }

    dataProduct.push(newProduct);
    localStorage.setItem('productArray', JSON.stringify(dataProduct));
    clearInputs()
    showData()
}

//clear Inputs data

function clearInputs() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

//Show data

function showData() {
    let tabel = '';

    for (let i = 0; i < dataProduct.length; i++) {
        tabel += `
           <tr>
                <td>${i}</td>
                <td>${dataProduct[i].title}</td>
                <td>${dataProduct[i].price}</td>
                <td>${dataProduct[i].taxes}</td>
                <td>${dataProduct[i].ads}</td>
                <td><button id="update">update</button></td>
                <td><button id="delete">delete</button></td>
            </tr>
        `;
    }


    let tbody =  document.getElementById('tbody');
    tbody.innerHTML = tabel ;
}
showData()

