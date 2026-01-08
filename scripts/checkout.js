import { cart, removeFromCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { currencyFormat } from './utils/money.js';
import { getQuantity, updateQuantity, updateDeliveryOption } from '../data/cart.js';
import { deliveryOptions } from '../data/deliveryOptions.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
// import  dayjs  from '../public/dayjs.js'

function renderOrderSummary() {


  let orderSummaryHtml = ``;
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    let matchingItem;

    products.forEach((product) => {
      if (product.id === cartItem.productID) {
        matchingItem = product;
        updateCartQuantity(cartItem.quantity, 'js-items-quantity', true);

      }
    });
    const deliveryOptionID = cartItem.deliveryOptionID;
    let deliveryOption;
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionID) {
        deliveryOption = option;

      }

    });

    let today = dayjs();
    let deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );

    let dataString = deliveryDate.format(
      'dddd,MMMM D'
    );
    orderSummaryHtml += `
    <div class="cart-item-container-${matchingItem.id}">
              <div class="delivery-date">
                Delivery date: ${dataString}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src=${matchingItem.image}>

                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingItem.name}
                  </div>
                  <div class="product-price">
                    $${currencyFormat(matchingItem.priceCents)}
                    
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id=${matchingItem.id}>
                      Update
                    </span>
                    <input class="update-quantity-input js-update-quantity-input-${matchingItem.id}"data-product-id=${matchingItem.id}>
                    <span class="save-quantity-link link-primary" data-product-id=${matchingItem.id}>Save</span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id=${matchingItem.id}>
                      Delete
                    </span>
                    <div class="Error-message js-Error-message-${matchingItem.id}" ></div>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
              ${deliveryOptionsHTML(matchingItem, cartItem)}
                
                  </div>
                </div>
              </div>
            </div>
  `
  });
  document.querySelector('.js-order-summary').innerHTML = orderSummaryHtml;
  document.querySelectorAll('.js-delete-link')
    .forEach((deleteItem) => {
      deleteItem.addEventListener('click', () => {
        let deleteItemId = deleteItem.dataset.productId;

        updateCartQuantity(getQuantity(deleteItemId), 'js-items-quantity', false);
        removeFromCart(deleteItemId);
        const container = document.querySelector(`.cart-item-container-${deleteItemId}`);
        container.remove();
      })
    });
  document.querySelectorAll('.js-update-link')
    .forEach((updatelink) => {
      updatelink.addEventListener('click', () => {
        let updateLinkID = updatelink.dataset.productId;
        const container = document.querySelector(`.cart-item-container-${updateLinkID}`);
        if (container.classList.contains('is-editing-quantity')) {
          console.log('yes thats right');
          container.classList.remove('is-editing-quantity');

        } else {
          console.log('yes thats negtive');
          container.classList.add('is-editing-quantity');


        }


      })
    });
  document.querySelectorAll('.save-quantity-link')
    .forEach((savelink) => {
      savelink.addEventListener('click', () => {
        let saveLinkID = savelink.dataset.productId;//
        processUpdateQuantity(saveLinkID);


      })
    })
  document.querySelectorAll('.update-quantity-input')
    .forEach((savelink) => {
      savelink.addEventListener('keyup', (event) => {

        if (event.key === 'Enter') {
          let saveLinkID = savelink.dataset.productId;//

          processUpdateQuantity(saveLinkID);

        }


      })
    })

  function updateCartQuantity(quantity, nameOfClass, minOrAdd) {
    if (minOrAdd) {
      cartQuantity += quantity;

    }
    else {
      cartQuantity -= quantity;

    }

    document.querySelector(`.${nameOfClass}`).innerHTML = cartQuantity;
  }
  function processUpdateQuantity(productID) {
    const container = document.querySelector(`.cart-item-container-${productID}`);
    const containerUpdate = Number(document.querySelector(`.js-update-quantity-input-${productID}`).value);

    if (containerUpdate > 0 && containerUpdate < 14) {
      updateCartQuantity(getQuantity(productID), 'js-items-quantity', false);

      updateQuantity(productID, containerUpdate);
      updateCartQuantity(getQuantity(productID), 'js-items-quantity', true);

      const cartQuantity = document.querySelector(`.cart-item-container-${productID} .quantity-label`);
      cartQuantity.innerHTML = containerUpdate;

      container.classList.remove('is-editing-quantity');
      document.querySelector(`.js-Error-message-${productID}`)
        .innerHTML = '';
    }
    else {
      document.querySelector(`.js-Error-message-${productID}`)
        .innerHTML = 'Error,you can put that number';
      return;
    }
  }
  function deliveryOptionsHTML(matchingItem, cartItem) {
    let deliveryOptionsHTML = ``
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();

      const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days'
      );
      const dataString = deliveryDate.format(
        'dddd,MMMM D'
      );
      const priceString = deliveryOption.priceCents
        === 0
        ? 'Free'
        : `$${currencyFormat(deliveryOption.priceCents)} -shipping`;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionID;



      deliveryOptionsHTML +=
        `   
        <div class="delivery-option js-delivery-option"
            data-product-id=${matchingItem.id}
            data-delivery-option-id=${deliveryOption.id}
        >
                <input type="radio"
                ${isChecked ? 'checked' : ''}
                  class="delivery-option-input"
                  name="delivery-option-${matchingItem.id}">
                <div>
                  <div class="delivery-option-date">
                    ${dataString}
                  </div>
                  <div class="delivery-option-price">
                    ${priceString} - Shipping
                  </div>
              </div>
          </div>
        `;
    });
    return deliveryOptionsHTML;
  }
  document.querySelectorAll('.js-delivery-option')
    .forEach((radioButton) => {
      radioButton.addEventListener('click', () => {
        console.log('cliclcsalcsaldsaldsa');
        const  productID = radioButton.dataset.productId;
        const  deliveryOptionId  = radioButton.dataset.deliveryOptionId;

        console.log(productID);
        updateDeliveryOption(productID, deliveryOptionId);
        renderOrderSummary();

      })
    })
}
renderOrderSummary();