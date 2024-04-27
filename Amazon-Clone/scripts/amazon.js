// put all imports at the top of the file
// modules only works with live server
// add attribute type="module" to the main file where we import the other files"
// modules are a better way to organise our code
import { addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/utils.js";
// loop through the product

// new comcept learned about data attribute and syntax for it
// 1. it's just an html attribute
// 2. it have to start with "data-"
// 3. then give it any name
// 4. the purpose of data attribute is to attach any information to an element
// data-product-name=${product.name} => name and value pair

// below is the accumulator pattern we loop through an array add add the result to the variable
let getListItems = "";
function renderProductsList() {
  products.forEach((product, index) => {
    renderProductsHtmlList(product, index);
  });
  document.querySelector(".js-products-grid").innerHTML = getListItems;
}

renderProductsList();

function renderProductsHtmlList(product, index) {
  let productsHtml = `
        <div class="product-container" key="${index}">
            <div class="product-image-container">
            <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                  ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
                $${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
           data-product-id="${product.id}">
            Add to Cart
            </button>
        </div>
    `;
  getListItems += productsHtml;
}

let cartQuantity = 1;
// update the cart items quantity
function updateCartQuantity(productId) {
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity++;
}

// this will give the list of all the add to card buttons in the page.
document.querySelectorAll(".js-add-to-cart").forEach((addToCartButton) => {
  // console.log("addToCartButton.dataset", addToCartButton);
  addToCartButton.addEventListener("click", () => {
    const productId = addToCartButton.dataset.productId;
    // looping through all the cart items and comparing the selected productname with existing items product name
    addToCart(productId);
    updateCartQuantity(productId);
  });
});
