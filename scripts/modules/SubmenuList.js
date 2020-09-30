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
    this.$el.on('click', this.handleClick);
    $(window).click(function() {
      $(document).find('.js-submenu-list-content').css('display', 'none');
    });
  }

  handleClick = (e) => {
    e.stopPropagation();
    $(document).find('.js-submenu-list-content').css('display', 'none');
    if (this.dom.$submenuContent.css('display') === 'block') this.dom.$submenuContent.css('display', 'none');
    else this.dom.$submenuContent.css('display', 'block');
  }
}

export default SubmenuList;
