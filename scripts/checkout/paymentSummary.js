import { getProduct } from "../../data/products.js";
import { cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { currencyFormat } from "../utils/money.js";

export function renderPaymnetSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productID);
        productPriceCents += product.priceCents * cartItem.quantity;
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionID);
        console.log(deliveryOption);
        shippingPriceCents += deliveryOption.priceCents;
    })
    let totalBeforeTax=productPriceCents+shippingPriceCents;
    let estimatedTax=totalBeforeTax*0.1;
    let orderTotal=totalBeforeTax+estimatedTax;
    // 15i.In the payment summary on the right ,the number in the first line
    //   "Items (3):" is supposed to show the cart quantity .However,this number 
    //    is always 3.Replace this number with the actual cart quantity and make 
    //    sure it updates whenever we change the cart.
    let paymentSummaryHTML=`
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
         <div>Items (${cart.length}):</div>
        <div class="payment-summary-money">$${currencyFormat(productPriceCents)}</div>
            </div>

        <div class="payment-summary-row">
         <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${currencyFormat(shippingPriceCents)}</div>
            </div>

        <div class="payment-summary-row subtotal-row">
         <div>Total before tax:</div>
        <div class="payment-summary-money">$${currencyFormat(totalBeforeTax)}</div>
            </div>

            <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${currencyFormat(estimatedTax)}</div>
            </div>

            <div class="payment-summary-row total-row">
              <div>Order total:</div>
            <div class="payment-summary-money">$${currencyFormat(orderTotal)}</div>
        </div>

        <button class="place-order-button button-primary">
        Place your order
        </button>
    `;
    document.querySelector('.js-payment-summary')
    .innerHTML=paymentSummaryHTML;

}