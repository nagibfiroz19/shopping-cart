function updateProductNumber(product, price, isADD) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isADD == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-Total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}   

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-Total').innerText = subTotal;
    console.log(subTotal);
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('Total-price').innerText = totalPrice;

}

//handle product increase decrease event

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})
//handle case increase decrease event

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})