export const getPriceWithoutCurrency = (priceString = "$00.00") => {
  return parseFloat(priceString.split('$')[1]);
}

export default {
  getPriceWithoutCurrency
};