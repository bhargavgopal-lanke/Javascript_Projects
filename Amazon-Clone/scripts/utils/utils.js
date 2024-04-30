export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}

export function generateRandomDate() {
  const date = Date();
  console.log("date", date());
}