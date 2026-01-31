import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymnetSummary}  from "./checkout/paymentSummary.js"
import { renderCheckOutHeader } from "./checkout/checkoutHeader.js";
import { loadProdcuts } from "../data/products.js";
import {loadCart} from "../data/cart.js";
import {loadProductsFetch} from "../data/products.js"

Promise.all([
   loadProductsFetch(),
     new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })
]).then(()=>{
     renderCheckOutHeader();
    renderOrderSummary();
    renderPaymnetSummary(); 
})
// loadProdcuts(()=>{
//     renderCheckOutHeader();
//     renderOrderSummary();
//     renderPaymnetSummary();
// });




