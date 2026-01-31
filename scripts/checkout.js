import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymnetSummary}  from "./checkout/paymentSummary.js"
import { renderCheckOutHeader } from "./checkout/checkoutHeader.js";
import { loadProdcuts } from "../data/products.js";
import {loadCart} from "../data/cart.js";

Promise.all([
    new Promise((resolve)=>{
        loadProdcuts(()=>{
            resolve('value1');
        });
    }),
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




