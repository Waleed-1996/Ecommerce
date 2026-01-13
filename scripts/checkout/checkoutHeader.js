import { cart } from "../../data/cart.js"
export function renderCheckOutHeader(){
    let quantityOfCart=0;
    cart.forEach((cartItem) => {
      quantityOfCart += cartItem.quantity;
    });
    let html=
    `
     <div class="checkout-header-left-section">
        <a href="amazon.html">
          <img class="amazon-logo" src="images/amazon-logo.png">
          <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
        </a>
      </div>

      <div class="checkout-header-middle-section">
        Checkout (<a class="return-to-home-link js-items-quantity" href="amazon.html">${quantityOfCart}</a>)
      </div>

      <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png">
      </div>
    `
    document.querySelector('.header-content').innerHTML=html;
    
}