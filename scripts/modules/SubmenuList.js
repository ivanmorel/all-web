class SubmenuList {
  constructor(el){
    this.$el = $(el);
    this.setDefaults();
    this.addListeners();
  }

  setDefaults() {
    this.dom = { 
      $submenuContent: this.$el.find('.js-submenu-list-content'),
    }
  }

  addListeners() {
    this.$el.on('mouseenter', this.handleMouseEnter);
    this.$el.on('mouseleave', this.handleMouseLeave);
  }

  handleMouseEnter = (e) => this.dom.$submenuContent.css('display', 'block');
  handleMouseLeave = (e) => this.dom.$submenuContent.css('display', 'none');
}

export default SubmenuList;
