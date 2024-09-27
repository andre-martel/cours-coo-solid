const discountTypeMapping = new Map([
  ["SALES_DAY", 0.9],
  ["SUMMER", 0.8],
  ["BLACK_FRIDAY", 0.7],
]);

function calculatePrice(price: number, discountType: string) {
  const discountValue = discountTypeMapping.get(discountType);

  if (!discountValue) {
    throw new Error("MAchin .....");
  }

  return price * discountValue;
}

const discountAmount = calculatePrice(100, "BLACK_FRIDAY");
