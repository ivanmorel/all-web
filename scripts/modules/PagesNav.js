class PagesNav {
  constructor(el){
    this.$el = $(el);
    this.showPagesNav();
  }

  showPagesNav() {
    if(window.location.pathname.includes('pages')) {
      this.$el.css('display', 'flex');
    }
  }
}

export default PagesNav;
