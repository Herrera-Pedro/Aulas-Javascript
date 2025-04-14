let cart = [];

function addToCart(name, price){
    let item = cart.find(item => item.name === name);
    if(item){
        item.quantity++;
    } else {
        cart.push({name, price, quantity: 1});
    }
    updateCart();
}

function updateCart(){
    let cartElement = document.getElementById("cart");
    cartElement.innerHTML = ""; // Clear the cart display

    cart.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.textContent = `${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}`;
        cartElement.appendChild(cartItem);
    });

    let totalElement = document.getElementById("totalPrice");
    totalElement.textContent = `Total: R$ ${calculateTotal().toFixed(2)}`;
}

function checkout(){
    if(cart.length === 0){
        alert("Seu carrinho está vazio!");
        return;
    } else {
        let orderSummary = "Pedido: ";

        cart.forEach(item => {
            orderSummary += `${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}\n`;
        });
    }
    orderSummary += `\nTotal: R$ ${calculateTotal().toFixed(2)}`;
    alert(orderSummary);
}

function calculateTotal(){
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}