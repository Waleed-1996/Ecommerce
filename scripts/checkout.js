import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymnetSummary}  from "./checkout/paymentSummary.js"
import { renderCheckOutHeader } from "./checkout/checkoutHeader.js";
import { loadProdcuts } from "../data/products.js";

loadProdcuts(()=>{
    renderCheckOutHeader();
    renderOrderSummary();
    renderPaymnetSummary();
});




