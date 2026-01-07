export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [
        {
            productID: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionID: '1'
        },
        {
            productID: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionID: '2'

        }
    ]
}
// export let 
let addedToCart;
function saveLocalSTorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
export function addToCart(productID, quantity) {


    if (addedToCart) {
        clearTimeout(addedToCart);
    }
    let matchingItem;
    cart.forEach((Item) => {
        if (Item.productID === productID) {
            matchingItem = Item
        }
    })
    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push(
            {
                productID: productID,
                quantity: quantity,
                deliveryOptions: '1'
            }
        )
    }
    saveLocalSTorage();//added to local storage

    document.querySelector(`.js-added-to-cart-${productID}`).classList.add('make-visible');
    addedToCart = setTimeout(() => {
        document.querySelector(`.js-added-to-cart-${productID}`).classList.remove('make-visible');

    }, 2000);
}
export function removeFromCart(productID) {
    let newCart = []
    cart.forEach((cartItem) => {
        if (cartItem.productID !== productID) {
            newCart.push(cartItem);
        }
    })
    cart = newCart;
    saveLocalSTorage();
}
export function getQuantity(productID) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].productID == productID) {
            return cart[i].quantity;
            break;
        }
    }
}
export function updateQuantity(productID, newQuantity) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].productID == productID) {
            cart[i].quantity = newQuantity;
            saveLocalSTorage();

            break;
        }
    }
}
export function updateDeliveryOption(productID, deliveryOptionId) {
    let matchingItem;
    cart.forEach((Item) => {
        if (Item.productID === productID) {
            matchingItem = Item
            matchingItem.deliveryOptionID = deliveryOptionId;

        }
    })
    saveLocalSTorage();


}