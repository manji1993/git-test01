


// new code

let cart = [];

function addToCart(item, price) {
    const itemIndex = cart.findIndex(cartItem => cartItem.name === item);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ name: item, price: price, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const orderTotalElement = document.getElementById('order-total');
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach((cartItem, index) => {
        total += cartItem.price * cartItem.quantity;
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${cartItem.name} 
            <span>${cartItem.quantity} x $${cartItem.price.toFixed(2)} = $${(cartItem.quantity * cartItem.price).toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(listItem);
    });
    
    cartCount.innerText = cart.length;
    orderTotalElement.innerText = `Order Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.querySelector('.confirm-order').addEventListener('click', () => {
    alert('Order confirmed!');
    cart = [];
    updateCart();
});



