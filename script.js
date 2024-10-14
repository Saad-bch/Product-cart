
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

    if (newProduct.count > 1) {
        for (let i = 0; i < newProduct.count; i++) {
            dataProduct.push(newProduct);
        }
    } else {
        dataProduct.push(newProduct);
    }

    //save data
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
    // Reset de tabel elke keer als de functie wordt aangeroepen
    let tabel = '';

    for (let i = 0; i < dataProduct.length; i++) {
        tabel += `
           <tr>
                <td>${i}</td>
                <td>${dataProduct[i].title}</td>
                <td>${dataProduct[i].price}</td>
                <td>${dataProduct[i].taxes}</td>
                <td>${dataProduct[i].ads}</td>
                <td><button class="update">update</button></td>
                <td><button onclick="deleteData(${i})" class="delete">delete</button></td>
            </tr>
        `;
    }

    document.getElementById('tbody').innerHTML = tabel;  // Vul de tabel met nieuwe data

    // De Delete All knop opnieuw instellen
    let deleteAll = document.getElementById("divDelete");
    if (dataProduct.length > 0) {
        deleteAll.innerHTML = `<button onclick="deletArrayData()">Delete All (${dataProduct.length}) </button>`;
    } else {
        deleteAll.innerHTML = '';
    }
}

showData()

//delete data

function deleteData(i) {
    dataProduct.splice(i, 1);
    localStorage.productArray = JSON.stringify(dataProduct);
    showData()
}

function deletArrayData() {
    localStorage.clear();
    dataProduct.splice(0);
    showData()
}

