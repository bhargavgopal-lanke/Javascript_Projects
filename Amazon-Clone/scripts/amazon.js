// product product list array

const products = [
  {
    images: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    price: 1090,
  },
  {
    images: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4.0,
      count: 127,
    },
    price: 2095,
  },
  {
    images: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-shirt",
    rating: {
      stars: 4.5,
      count: 56,
    },
    price: 799,
  },
];

// loop through the product

function renderItemsList() {
    // below is the accumulator pattern we loop through the array
  let getListItems = "";
  products.forEach((product, index) => {
    let productsHtml = `
        <div class="product-container" key="${index}">
            <div class="product-image-container">
            <img class="product-image"
                src="${product.images}">
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
                $${(product.price / 100).toFixed(2) }
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
  });

  document.querySelector(".js-products-grid").innerHTML = getListItems;
}

renderItemsList();
