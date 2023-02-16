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
}

console.log(totalPrice);

if (totalPrice >= 20.00) {
    console.log(0.1 * totalPrice);
    const discount = round(0.1 * totalPrice);
    const discountElem = document.getElementById('discount');
    discountElem.innerText = "-" + displayPrice(discount);
    totalPrice -= discount;
}

subtotal.innerText = displayPrice(round(totalPrice));

var taxPrice = round(tax * totalPrice);
taxElem.innerText = displayPrice(taxPrice);

totalPrice += taxPrice;

console.log(totalPrice);

totalPriceElem.innerText = displayPrice(round(totalPrice));

function round(price) {

    let displayedPrice = "" + price;
    var priceSplit = displayedPrice.split('.');
    //if there is no decimal, or the decimal is only to the hundredths place
    if (priceSplit.length == 1 || (priceSplit.length > 1 && priceSplit[1].length <= 2)) {
        return price;
    }
    let thousandthsPlace = parseInt(priceSplit[1][2]);
    let decimal = parseInt((priceSplit[1]).slice(0, 2)) / 100;
    //if there is a decimal and it needs rounding 
    if (thousandthsPlace >= 5) {
       decimal += 0.01;
    }

    return parseInt(priceSplit[0]) + decimal;
    
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
    else if (priceSplit.length > 1 && priceSplit[1].length > 2) {
        displayedPrice = priceSplit[0] + "." + priceSplit[1].slice(0, 2);
    }
    return "$" + displayedPrice;
}

