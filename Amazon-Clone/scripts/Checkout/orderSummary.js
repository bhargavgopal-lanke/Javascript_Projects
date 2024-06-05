import { Cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import {
  deliveryOptions,
  getDeliveryOption,
} from "../../data/deliveryOptions.js";
import { productsList } from "../../data/products.js";
import { formatCurrency } from "../utils/utils.js";
import { renderPaymentSummary } from "./paymentSummary.js";

// Main idea of javascript
// 1. save the data.
// 2. Generate the HTML
// 3. Make it interactive

export function orderSummary() {
  let checkoutItems;
  function generateHtml(matchingProduct, cartItems) {

    const deliveryOptionId = cartItems.deliveryOptionId;
    const deliveryOption = getDeliveryOption(deliveryOptionId);

    // calculated the date for each delivery option
    const today = dayjs(); // get todays date
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    checkoutItems += `
      <div class="cart-item-container js-cart-item-container-${
          matchingProduct.id
        }">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>
    
        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">
    
          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
            ${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${
                  cartItems.quantity
                }</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                matchingProduct.id
              }">
                Delete
              </span>
            </div>
          </div>
    
          <div class="delivery-options">
          
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div>
                ${deliverOptionsHtml(matchingProduct, cartItems)} 
            </div>      
          </div>
       </div>
    </div>
    
    <div class="cart-item-container js-cart-item-container-${
      matchingProduct.id
      }">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>
    </div>`;
  }

  // get the cartData from localstorage and render it in checkout page
  Cart.forEach((cartItems) => {
    const productId = cartItems.productId;
    const matchingProduct = productsList(productId);
    generateHtml(matchingProduct, cartItems);
    document.querySelector(".order-summary").innerHTML = checkoutItems;
  });

  function deliverOptionsHtml(matchingProduct, cartItems) {
    let renderDeliveryHtmlOutput;

    // console.log("cartItemsHTMl", cartItems);
    deliveryOptions.forEach((deliveryOption) => {
      // calculated the date for each delivery option
      const today = dayjs(); // get todays date
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");

      const priceString =
        deliveryOption.priceCents === 0
          ? "Free"
          : `$${formatCurrency(deliveryOption.priceCents)}`;

      const isChecked =
        deliveryOption.id === cartItems.deliveryOptionId ? "checked" : "";

      let deliveryHtml = `
        <div class="delivery-option 
          js-delivery-option" 
          data-product-id="${matchingProduct.id}"
          data-deliveryOption-id="${deliveryOption.id}"
          >
        <input type="radio"
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}"
          ${isChecked}>
        <div>
          <div class="delivery-option-date">
          ${dateString}
          </div>
          <div class="delivery-option-price">
          ${priceString} - Shipping
          </div>
        </div>
      </div>`;
      renderDeliveryHtmlOutput += deliveryHtml;
    });
    return renderDeliveryHtmlOutput;
  }

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      // the product we're trying to remove
      const productId = link.dataset.productId;
      // update the cart with remaining items and return the cart;
      removeFromCart(productId);
      // every element we get with dom has a method called .remove();
      const [container, containerOne] = document.querySelectorAll(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      containerOne.remove();

      // regenarate all the html
      renderPaymentSummary();
    });
  });

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryoptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryoptionId);
      // inside the render summary function we can call render order summary again
      // a function can call/ rerun itself and this feature is called recursion.
      orderSummary();
    });
  });
}
