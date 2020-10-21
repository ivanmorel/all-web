import {moneyConversion} from '../utils/conversionMethods';
import {getPriceWithoutCurrency} from '../utils/priceParser';

class DonationStatementAjaxCartCart {
  constructor(el){
    this.$el = $(el);
    this.setDefaults();
    this.init();
  }

  setDefaults() {
    this.dom = { 
      $priceContainer: this.$el.find('.ajaxcart__price'),
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
    const convertedAmmount = conversionMethod(price);
    return `From this product, you are giving $${conversionMethod(price)} to The Thirst Project`;
  }

}

export default DonationStatementAjaxCartCart;
