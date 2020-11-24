import Collapsible from './Collapsible';

class ProductMobileNav {
  constructor(el){
    this.$el = $(el);
    this.setupDefaults();
    this.setProductMobileNav();
  }

  setupDefaults() {
    this.dom = { 
      $navContent: $(document).find('.js-product-mobile-nav-content'),
    }
  }

  setProductMobileNav() {
    this.$el.html(this.dom.$navContent.html());
    $('.js-collapse').each((index, element) => {
      new Collapsible(element);
    });
  }
}

export default ProductMobileNav;
