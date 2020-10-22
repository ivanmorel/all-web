export const waterConversion = (amount = 0) => {
  //From an specific amount, get the 5% and divide by 0.5
  return Math.ceil(amount * 0.05 / 0.5);
}

export const moneyConversion = (amount = 0) => {
  return (amount * 0.05).toFixed(2);
}

export default {
  moneyConversion,
  waterConversion
}