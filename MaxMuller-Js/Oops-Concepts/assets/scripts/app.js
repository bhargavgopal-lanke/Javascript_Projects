// classes are blueprints for objects
// classes works mostly in chrome browser for supporting in other browsers need to do something.
// constructor method comes inside a class.
class Product {
  title = "DEFAULT";
  imageUrl;
  price;
  description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

const productsList = {
  products: [
    new Product(
      "A Lake Wallposter",
      "https://wallpaper.forfun.com/fetch/62/624e27fde335d49e2dd3c6b75c6027a3.jpeg?download=nature-novaya_zelandiya-ostrov-ozero-uanaka-50812.jpeg",
      19.99,
      "A great wallposter"
    ),
    new Product(
      "Japan City",
      "https://wallpaper.forfun.com/fetch/d9/d99cfc4cec7dad7bedc999a2e23802e5.jpeg?download=anime-doma-goroda-27499.jpeg",
      89.99,
      "A Japan city wallposter"
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    // looping through all the elements in the products
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
            <img src="${prod.imageUrl}" alt="${prod.title}" />
            <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to cart</button>
            </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productsList.render();
