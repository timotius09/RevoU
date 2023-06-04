let cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cartItems');
  cartItemsElement.innerHTML = '';
  cartItems.forEach(item => {
    const itemElement = document.createElement('p');
    itemElement.textContent = item;
    cartItemsElement.appendChild(itemElement);
  });
}

function checkout() {
  // Perform checkout logic here
  alert('Checkout complete! Thank you for shopping!');
  cartItems = [];
  updateCart();
}
