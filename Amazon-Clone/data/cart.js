// localStorage will give the string version of our cart
// In order to convert string to array we have to use JSON.parse
export let Cart = JSON.parse(localStorage.getItem("Cart"));
// if the cart value is null Cart will become truthy
// !null will become truthy if the value is null
if (!Cart) {
  Cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
      deliveryOptionId: "1",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: "2",
    },
  ];
}

// save the data to local storage
function saveToStorage() {
  localStorage.setItem("Cart", JSON.stringify(Cart));
}

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
      deliverOptionId: "1",
    });
  }
  saveToStorage();
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
  saveToStorage();
}

// we need the productId and deliveryOptionId to update the deliveryOptions
export function updateDeliveryOption(productId, deliveryoptionId) {
  let matchingProduct;
  Cart.forEach((cartItem) => {
    // return the product from the cart when the productid and the cartItems Id matches
    if (productId === cartItem.productId) {
      matchingProduct = cartItem;
    }
  });

  matchingProduct.deliveryOptionId = deliveryoptionId;
  saveToStorage();
}
