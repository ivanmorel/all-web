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
    if(window.location.pathname.includes('collections')) {
      this.$el.html(this.dom.$navContent.html());
      $('.js-collapse').each((index, element) => {
        console.log()
        new Collapsible(element);
      });
    }
  }
}

export default ProductMobileNav;
