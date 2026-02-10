let cart = [];
function addToCart(buttonElement) {
    const blueYarn = buttonElement.closest('.blue-yarn');  
    const priceElement = blueYarn.querySelector('.price');
    const price = parseFloat(priceElement.getAttribute('data-price'));
    cart.push(price);
    updateCartTotalDisplay();
}
function  addToCart(buttonElement) {
    const yellowYarn = buttonElement.closest('.yellow-yarn');  
    const priceElement = yellowYarn.querySelector('.price');
    const price = parseFloat(priceElement.getAttribute('data-price'));
    cart.push(price);
    updateCartTotalDisplay();
}   
function addToCart(buttonElement) {
    const pinkYarn = buttonElement.closest('.pink-yarn');  
    const priceElement = pinkYarn.querySelector('.price');      
    const price = parseFloat(priceElement.getAttribute('data-price'));
    cart.push(price);
    updateCartTotalDisplay();
}

function removeFromCart(buttonElement) {
    const blueYarn = buttonElement.closest('.blue-yarn');  
    const priceElement = blueYarn.querySelector('.price');
    const price = parseFloat(priceElement.getAttribute('data-price'));
    const index = cart.indexOf(price);
}
    if (index > -1) {
        cart.splice(index, 1);
        updateCartTotalDisplay();
    }   
    const yellowYarn = buttonElement.closest('.yellow-yarn');
    if (yellowYarn) {
        const priceElement = yellowYarn.querySelector('.price');
        const price = parseFloat(priceElement.getAttribute('data-price'));
        const index = cart.indexOf(price);
        if (index > -1) {
            cart.splice(index, 1);
            updateCartTotalDisplay();
        }               
    }
function updateCartTotalDisplay() {
    const cartTotal = cart.reduce((total, price) => total + price, 0);
    document.getElementById('cart-total').textContent = `Cart Total: $${cartTotal.toFixed(2)}`;

