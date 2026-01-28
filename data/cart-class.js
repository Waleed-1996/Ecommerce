class Cart {
    cartItems;
    #localStorageKey;
    constructor(localStorageKey){
        this.#localStorageKey=localStorageKey;
        this.#loadFromStorage();
    }
    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
        if (!this.cartItems) {
            this.cartItems = [
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
    }

    saveLocalSTorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productID, quantity) {


        if (addedToCart) {
            clearTimeout(addedToCart);
        }
        let matchingItem;
        this.cartItems.forEach((Item) => {
            if (Item.productID === productID) {
                matchingItem = Item
            }
        })
        if (matchingItem) {
            matchingItem.quantity += quantity;
        } else {
            this.cartItems.push(
                {
                    productID: productID,
                    quantity: quantity,
                    deliveryOptionID: '1'
                }
            )
        }
        this.saveLocalSTorage();//added to local storage

        // document.querySelector(`.js-added-to-cart-${productID}`).classList.add('make-visible');
        // addedToCart = setTimeout(() => {
        //     document.querySelector(`.js-added-to-cart-${productID}`).classList.remove('make-visible');

        // }, 2000);
    }
    removeFromCart(productID) {
        let newCart = []
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productID !== productID) {
                newCart.push(cartItem);
            }
        })
        this.cartItems = newCart;
        this.saveLocalSTorage();
    }
    getQuantity(productID) {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].productID == productID) {
                return this.cartItems[i].quantity;
                break;
            }
        }
    }
    updateQuantity(productID, newQuantity) {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].productID == productID) {
                this.cartItems[i].quantity = newQuantity;
                this.saveLocalSTorage();

                break;
            }
        }
    }
    updateDeliveryOption(productID, deliveryOptionId) {
        let matchingItem;
        this.cartItems.forEach((Item) => {
            if (Item.productID === productID) {
                matchingItem = Item
                matchingItem.deliveryOptionID = deliveryOptionId;

            }
        })
        this.saveLocalSTorage();


    }
}
export const cart=new Cart('oop-cart');
const busnissCart=new Cart('busnissCart');
console.log(cart);
console.log(busnissCart);













