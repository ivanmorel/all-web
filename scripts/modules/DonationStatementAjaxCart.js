import DonationStatementAjaxCartProduct from './DonationStatementAjaxCartProduct';
import DonationStatementAjaxCartTotal from './DonationStatementAjaxCartTotal';

class DonationStatementAjaxCart {
  constructor(el){
    this.$el = $(el);
    this.setDefaults();
    this.addListeners();
  }

  setDefaults() {
    this.dom = {};
    this.config = {
      namespace: '.ajaxcart'
    };
  }

  addListeners() {
    $('body').on(`updateCart${this.config.namespace}`, this.initializeStatements.bind(this));
  }

  initializeStatements() {
    this.$el.find('.js-donation-statement-ajaxcart__product').each((index, product) => {
      new DonationStatementAjaxCartProduct(product, {isAjaxCart: true});
    });
    this.$el.find('.js-donation-statement-ajaxcart__total').each((index, product) => {
      new DonationStatementAjaxCartTotal(product, {isAjaxCart: true});
    });
  }
}

export default DonationStatementAjaxCart;
