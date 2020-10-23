import { moneyConversion } from '../utils/conversionMethods';
import { getPriceWithoutCurrency } from '../utils/priceParser';

class DonationStatementProduct {
  constructor(el) {
    this.$el = $(el);
    this.setDefaults();
    this.init();
  }

  setDefaults() {
    this.amount = this.$el.data('productPrice') || '$0.00';
    this.dom = {
      $donationsContainer: this.$el.find('.js-product-donation__qty')
    }
  }

  init() {
    let donationsTotal = 0.00;
    let formattedAmount = getPriceWithoutCurrency(this.amount); 
    if (this.amount && this.amount !== 0) {
      donationsTotal = moneyConversion(formattedAmount);
    }
    this.dom.$donationsContainer.html(`$${donationsTotal}`);
  }
}

export default DonationStatementProduct;
