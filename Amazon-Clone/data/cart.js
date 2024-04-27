export const Cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];



// add items to the cart
export function addToCart(productId) {
  // selected productname value we're getting it by using dataset
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
