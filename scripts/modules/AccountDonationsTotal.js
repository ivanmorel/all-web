import {moneyConversion} from '../utils/conversionMethods';
import {getPriceWithoutCurrency } from '../utils/priceParser';

class AccountDonationsTotal {
  constructor(el) {
    this.$el = $(el);
    this.setDefaults();
    this.init();
  }

  setDefaults() {
    this.amount = this.$el.data('totalSpent') || '$0.00';
  }

  init() {
    let donationsTotal = 0.00;
    let formattedAmount = getPriceWithoutCurrency(this.amount); 
    if (this.amount && this.amount !== 0) {
      donationsTotal = moneyConversion(formattedAmount);
    }
    this.$el.html(`$${donationsTotal}`);
  }
}

export default AccountDonationsTotal;
