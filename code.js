let cartTotal = 0;
function addToCart(buttonElement) {
    const blue-yarn = buttonElement.closest(blue-yarn);
    const priceElement = blue-yarn.querySelector('.price');
    const price = parseFloat(priceElement.getAttribute('data-price'));
    cartTotal += price;
    updateCartTotalDisplay();
    console.log(`Added item with price: $${price.toFixed(2)}. New total: $${cartTotal.toFixed(2)}`);
}
function updateCartTotalDisplay() {
    const cartTotalElement = document.getElementById('total-price');
    totalDisplayElement.textContent = `Cart Total: $${cartTotal.toFixed(2)}`;
}
