export const waterConversion = (ammount = 0) => {
  //From an specific ammount, get the 5% and divide by 0.5
  return Math.ceil(ammount * 0.05 / 0.5);
}

export const moneyConversion = (ammount = 0) => {
  return (ammount * 0.05).toFixed(2);
}

export default {
  moneyConversion,
  waterConversion
}