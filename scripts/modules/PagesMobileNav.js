class PagesMobileNav {
  constructor(el){
    this.$el = $(el);
    this.setupDefaults();
    this.setProductMobileNav();
  }

  setupDefaults() {
    this.dom = { 
      $navContent: $(document).find('.js-pages-mobile-nav-content'),
    }
  }

  setProductMobileNav() {
    this.$el.html(this.dom.$navContent.html());
  }
}

export default PagesMobileNav;
