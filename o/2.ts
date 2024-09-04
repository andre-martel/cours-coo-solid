function calculatePrice(price: number, discount: string) {
  if (discount === "SALES_DAY") {
    return price * 0.9;
  } else if (discount === "SUMMER") {
    return price * 0.8;
  } else if (discount === "BLACK_FRIDAY") {
    return price * 0.7;
  } else {
    throw new Error("Invalid discount");
  }
}

const discountAmount = calculatePrice(100, "BLACK_FRIDAY");
