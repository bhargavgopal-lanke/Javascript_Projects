const productsList = {
  products: [
    {
      title: "A Lake Wallposter",
      imageUrl:
        "https://wallpaper.forfun.com/fetch/62/624e27fde335d49e2dd3c6b75c6027a3.jpeg?download=nature-novaya_zelandiya-ostrov-ozero-uanaka-50812.jpeg",
      price: 19.99,
      description: "A great wallposter",
    },
    {
      title: "Japan City",
      imageUrl:
        "https://wallpaper.forfun.com/fetch/d9/d99cfc4cec7dad7bedc999a2e23802e5.jpeg?download=anime-doma-goroda-27499.jpeg",
      price: 89.99,
      description: "A Japan city wallposter",
    },
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
