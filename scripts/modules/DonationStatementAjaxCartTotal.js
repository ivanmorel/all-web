import {moneyConversion} from '../utils/conversionMethods';
import {getPriceWithoutCurrency} from '../utils/priceParser';

class DonationStatementAjaxCartCart {
  constructor(el, config = {}){
    this.$el = $(el);
    this.setDefaults(config);
    this.init();
  }

  setDefaults(config) {
    const defaultConfig = {
      isAjaxCart: false
    }
    this.config = {...defaultConfig, ...config}
    this.dom = { 
      $priceContainer: this.config.isAjaxCart ? this.$el.find('.ajaxcart__price') : this.$el.find('.cart__subtotal'),
      $donationContainer: this.$el.find('.js-donation-statement--ajax-cart__total-text')
    }
    this.conversionMethod = moneyConversion;
  }

  init() {
    const price = getPriceWithoutCurrency(this.dom.$priceContainer.html());
    const donationMessage = this.processDonationMessage(price, this.conversionMethod);
    this.dom.$donationContainer.html(donationMessage);
  }
  
  processDonationMessage(price = 0, conversionMethod = () => 0){
    const convertedAmount = conversionMethod(price);
    return `From this purchase, you are giving <em>$${conversionMethod(price)}</em> to The Thirst Project`;
  }

}

export default DonationStatementAjaxCartCart;
