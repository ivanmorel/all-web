// Additional imports would go here

class MobileNavToggle {
  constructor(el) {
    this.$el = $(el);

    this.setDefaults();

    this.addListeners();
  }

  setDefaults() {
    this.dom = {
      $navItem: this.$el.closest(".mobile-nav__has-sublist"),
    };
  }

  addListeners() {
    this.$el.on("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    this.dom.$navItem.toggleClass("is-open");
  }
}

export default MobileNavToggle;
