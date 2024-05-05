export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}

export function generateRandomDate(deliveryOption) {
  const today = dayjs(); // get todays date
  const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  const dateString = deliveryDate.format("dddd, MMMM D");
  return dateString;
}
