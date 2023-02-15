const items = {"hotdog": 4.00, "frenchfry": 3.50, "drink": 1.75};
const totalPriceElem = document.getElementById('totalPrice');
const taxElem = document.getElementById('tax');
const subtotal = document.getElementById('subtotal');
const tax = 0.0625;
var totalPrice = 0;

for (let key in items) {
    let name = key;
    if (name == "frenchfry") {
        name = "french frie";
    }
    let quantity = parseInt(prompt(`How many ${name}s would you like?`, "e.g: 2"));
    const quantityElem = document.getElementById(`${key}_quantity`);
    const priceElem = document.getElementById(`${key}_price`);
    quantityElem.innerText = "x" + quantity;
    let price = round(quantity * items[key]);
    priceElem.innerText = displayPrice(price);
    totalPrice += price;
    // console.log(quantityElem.innerText, priceElem.innerText);
}

if (totalPrice >= 20.00) {
    const discount = round(0.1 * totalPrice);
    const discountElem = document.getElementById('discount');
    discountElem.innerText = "-" + displayPrice(discount);
    totalPrice -= discount;
}

subtotal.innerText = displayPrice(round(totalPrice));

var taxPrice = round(tax * totalPrice);
taxElem.innerText = displayPrice(taxPrice);

totalPrice += taxPrice;

totalPriceElem.innerText = displayPrice(round(totalPrice));

function round(price) {
    return Math.round(price * 100) / 100;
}

function displayPrice(price) {
    let displayedPrice = "" + price;
    var priceSplit = displayedPrice.split('.');

    if (priceSplit.length == 1) {
        displayedPrice += ".00";
    }
    else if (priceSplit.length > 1 && priceSplit[1].length == 1) { 
        displayedPrice += "0";
    }
    return "$" + displayedPrice;
}
