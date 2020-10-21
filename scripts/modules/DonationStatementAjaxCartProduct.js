import {moneyConversion} from '../utils/conversionMethods';
import {getPriceWithoutCurrency} from '../utils/priceParser';

class DonationStatementAjaxCartProduct {
  constructor(el, config){
    this.$el = $(el);
    this.setDefaults(config);
    this.init();
  }

  setDefaults(config) {
    const defaultConfig = {
      isAjaxCart: false
    }
    this.config = {...defaultConfig, ...config};
    this.dom = { 
      $priceContainer: this.config.isAjaxCart? this.$el.find('.ajaxcart__price') : this.$el.find('.cart__price--per-item'),
      $qtyIndicator: this.config.isAjaxCart? this.$el.find('.js-qty__num') : this.$el.find('.cart__product-qty'),
      $donationContainer: this.$el.find('.js-donation-statement--ajax-cart__product-text')
    }
    this.conversionMethod = moneyConversion;
  }

  init() {
    const price = getPriceWithoutCurrency(this.dom.$priceContainer.html());
    const prodQty = this.dom.$qtyIndicator.val() || 0;
    const totalPrice = prodQty * price;
    const donationMessage = this.processDonationMessage(totalPrice, this.conversionMethod);
    this.dom.$donationContainer.html(donationMessage);
  }
  
  processDonationMessage(price = 0, conversionMethod = () => 0){
    const convertedAmmount = conversionMethod(price);
    return `From this product, you are giving $${conversionMethod(price)} to The Thirst Project`;
  }

  moneyConversion(ammount = 0) {
    return (ammount * 0.05).toFixed(2);
  }
}

export default DonationStatementAjaxCartProduct;
