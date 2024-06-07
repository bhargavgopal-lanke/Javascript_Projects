import { Cart } from "../data/cart-oop.js";
import { orderSummary } from "../scripts/Checkout/OrderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";

orderSummary();
renderPaymentSummary();
console.log(Cart);