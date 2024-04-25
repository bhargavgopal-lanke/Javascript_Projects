// loop through the product

// new comcept learned about data attribute and syntax for it
// 1. it's just an html attribute
// 2. it have to start with "data-"
// 3. then give it any name
// 4. the purpose of data attribute is to attach any information to an element
// data-product-name=${product.name} => name and value pair

// below is the accumulator pattern we loop through the array add add the result to the variable
let getListItems = "";
products.forEach((product, index) => {
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
                $${(product.priceCents / 100).toFixed(2)}
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
           data-product-name="${product.name}">
            Add to Cart
            </button>
        </div>
    `;
  getListItems += productsHtml;
});

document.querySelector(".js-products-grid").innerHTML = getListItems;

// this will give the list of all the add to card buttons in the page.
let count = 1;
document
  .querySelectorAll(".js-add-to-cart")
  .forEach((addToCartButton, index) => {
    // console.log("addToCartButton.dataset", addToCartButton);
    addToCartButton.addEventListener("click", () => {
      const productName = addToCartButton.dataset.productName;
      const countValue = document.querySelector(".js-cart-quantity").innerHTML = count++;
      Cart.push({
         productName,
         countValue,
      });

      console.log(Cart);
    });
  });