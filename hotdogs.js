const items = {"hotdog": 4.00, "frenchfry": 3.50, "drink": 1.75};
const totalPriceElem = document.getElementById('totalPrice');
const taxElem = document.getElementById('tax');
const tax = 0.0625;
var totalPrice = 0;

for (let key in items) {
    let name = key;
    if (name == "frenchfry") {
        name = "french frie";
    }
    let quantity = parseInt(prompt(`How many ${key}s would you like?`, "e.g: 2"));
    const quantityElem = document.getElementById(`${key}_quantity`);
    const priceElem = document.getElementById(`${key}_price`);
    quantityElem.innerText = "x" + quantity;
    let price = round(quantity * items[key]);
    priceElem.innerText = "$"+ price;
    totalPrice += price;
    // console.log(quantityElem.innerText, priceElem.innerText);
}

if (totalPrice >= 20.00) {
    const discount = round(0.1 * totalPrice);
    const discountElem = document.getElementById('discount');
    discountElem.innerText = "-$" + discount;
    totalPrice -= discount;
}

var taxPrice = round(tax * totalPrice);
taxElem.innerText = "$" + taxPrice;

totalPrice += taxPrice;

totalPriceElem.innerText = "$" + round(totalPrice);

function round(price) {
    return Math.round(price * 100) / 100;
}
