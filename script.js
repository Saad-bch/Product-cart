
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

    }else {
        total.innerHTML = '';
        total.style.backgroundColor = "red";
    }

}
