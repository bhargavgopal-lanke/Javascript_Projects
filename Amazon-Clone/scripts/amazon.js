// product product list array

const products = [
  {
    images: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    price: 10090,
  },
  {
    images: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4.0,
      count: 127,
    },
    price: 20095,
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
  let getListItems = "";
  products.forEach((product, index) => {
    let html = `
        <div key=${index}>
            <div class="products-list">
                <ul>
                <li><img src="${product.images}" alt="product-images" /></li>
                <li>${product.name}</li>
                <li>${product.rating.stars}</li>
                <li>${product.rating.count}</li>
                <li>${product.price}</li>
                </ul>
            </div>
        </div>
    `;
    getListItems += html;
  });

  document.querySelector(".js-products-grid").innerHTML = getListItems;
}

renderItemsList();
