import { Cart, removeFromCart } from "../data/cart.js";
import { deliveryOptions } from "../data/deliveryOptions.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/utils.js";

let matchingProduct;
function productsList(productId) {
  // looping through the products and return the product item which is matching with productId from cart
  products.forEach((product) => {
    if (productId === product.id) {
      matchingProduct = product;
    }
  });
}

let checkoutItems;
function generateHtml(matchingProduct, productQuantity, cartItems) {
  const deliveryOptionId = cartItems.deliveryOptionId;

  console.log("cartItems", cartItems);
  let deliveryOption;
  deliveryOptions.forEach((option) => {
    // iterating through delivery Options and cartItems and getting the matching item.

    if (option.id === deliveryOptionId) {
      console.log("option", option);
      deliveryOption = option;
    }
  });

  console.log("deliveryOption", deliveryOption);

  // calculated the date for each delivery option
  const today = dayjs(); // get todays date
  const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  const dateString = deliveryDate.format("dddd, MMMM D");

  checkoutItems += `
  <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
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
            Quantity: <span class="quantity-label">${productQuantity}</span>
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
        ${deliverOptionsHtml(matchingProduct, cartItems)}       
      </div>
   </div>
</div>

<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
  <div class="delivery-date">
    Delivery date: ${dateString}
  </div>
</div>`;
}

// get the cartData from localstorage and render it in checkout page
Cart.forEach((cartItems) => {
  const productId = cartItems.productId;
  const productQuantity = cartItems.quantity;
  productsList(productId);
  generateHtml(matchingProduct, productQuantity, cartItems);
  document.querySelector(".order-summary").innerHTML = checkoutItems;
});

function deliverOptionsHtml(matchingProduct) {
  let renderDeliveryHtmlOutput;
  deliveryOptions.forEach((deliveryOption) => {
    // calculated the date for each delivery option
    const today = dayjs(); // get todays date
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    const priceString =
      deliveryOption.priceCents === 0
        ? "Free"
        : `$${formatCurrency(deliveryOption.priceCents)}`;

    const isChecked = deliveryOption.id === matchingProduct.id ? "checked" : "";

    let deliveryHtml = `<div class="delivery-option">
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
    removeFromCart(productId);
    const [container, containerOne] = document.querySelectorAll(
      `.js-cart-item-container-${productId}`
    );
    container.remove();
    containerOne.remove();
  });
});
