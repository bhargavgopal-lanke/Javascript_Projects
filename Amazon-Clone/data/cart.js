export let Cart = [
  // {
  //   productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  //   quantity: 1,
  // },
  // {
  //   productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  //   quantity: 1,
  // },
];



// add items to the cart
export function addToCart(productId) {
  // dataset convert from kebab case(product-id) to camelCase(productID)
  let matchingItem;
  Cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });
  // if the matching item is true increasing the quantity of the item object
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    Cart.push({
      productId,
      quantity: 1,
    });
  }
}

export function removeFromCart(productId) {
  const newCart = [];
  Cart.forEach((cartItems) => {
    // adding each items to the cart array except this productId item.
    // if it's not equal to the product we're trying to remove then add it to the new cart
    if (cartItems.productId !== productId) {
      newCart.push(cartItems);
    }
  });
    
  Cart = newCart;

  console.log("newCart", newCart);
}
