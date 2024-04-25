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
  {
    images: "images/products/black-2-slot-toaster.jpg",
    name: "2 slot - Toaster - Black",
    rating: {
      stars: 5,
      count: 2197,
    },
    price: 1899,
  },
  {
    images: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37,
    },
    price: 2067,
  },
  {
    images: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175,
    },
    price: 3499,
  },
  {
    images: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317,
    },
    price: 2400,
  },
  {
    images: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144,
    },
    price: 3599,
  },
  {
    images: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305,
    },
    price: 2899,
  },
  {
    images: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89,
    },
    price: 3390,
  },
  {
    images: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235,
    },
    price: 2070,
  },
  {
    images: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30,
    },
    price: 1560,
  },
];

// loop through the product

function renderItemsList() {
  // below is the accumulator pattern we loop through the array add add the result to the variable
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
                $${(product.price / 100).toFixed(2)}
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
