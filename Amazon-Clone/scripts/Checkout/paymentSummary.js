import { Cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { productsList } from "../../data/products.js";
import { formatCurrency } from "../utils/utils.js";

export function renderPaymentSummary() {
  let paymentSummary;
  let paymentSummaryValue = 0;
  let shippingPriceCents = 0;

  Cart.forEach((cartItems) => {
    const productId = cartItems.productId;

    // for each product price * quantity
    let product = productsList(productId);
    paymentSummaryValue += cartItems.quantity * product.priceCents;

    const deliveryOption = getDeliveryOption(cartItems.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = paymentSummaryValue + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalTax = totalBeforeTaxCents + taxCents;

  paymentSummary = `
  <div class="payment-summary-title">
    Order Summary
  </div>

  <div class="payment-summary-row">
    <div>Items (3):</div>
    <div class="payment-summary-money">$${paymentSummaryValue}</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$${formatCurrency(
      shippingPriceCents
    )}</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${formatCurrency(
      totalBeforeTaxCents
    )}</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${formatCurrency(totalTax)}</div>
  </div>

  <button class="place-order-button button-primary">
    Place your order
  </button>`;

  document.querySelector(".payment-summary").innerHTML = paymentSummary;
}
