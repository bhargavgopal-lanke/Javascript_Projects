export const Cart = [];


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

