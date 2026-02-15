let cartTotal = [];
function addToCart(buttonElement) {
    const blueYarn = buttonElement.closest('.blue-yarn');
    const priceElement = blueYarn.querySelector('.price');
    const price = parseFloat(priceElement.getAttribute('data-price'));
    cartTotal += price;
    updateCartTotalDisplay();
    console.log(`Added item with price: $${price.toFixed(2)}. New total: $${cartTotal.toFixed(2)}`);

        const yellowYarn = buttonElement.closest('.yellow-yarn');   
    if (yellowYarn) {
        const priceElement = yellowYarn.querySelector('.price');
        const price = parseFloat(priceElement.getAttribute('data-price'));
        cartTotal += price;
        updateCartTotalDisplay();
        console.log(`Added item with price: $${price.toFixed(2)}. New total: $${cartTotal.toFixed(2)}`);
    }
}
function updateCartTotalDisplay() {
    const cartTotalElement = document.getElementById('total-price');
    cartTotalElement.textContent = `Cart Total: $${cartTotal.toFixed(2)}`;
}
