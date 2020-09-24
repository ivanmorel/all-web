// Additional imports would go here

class ModuleTest {
  // Constructor should be very similar to this on each class
  constructor(el){
    // jQuery reference to element passed to class instance
    this.$el = $(el);

    // Set any default references needed
    this.setDefaults();
    
    // Set any needed listeners
    this.addListeners();
  }

  setDefaults() {
    //  this.dom is an object containing al references to needed DOM elements
    // It's a good practice to add a js- prefix to class names that don't deal with CSS
    this.dom = { 
      $closeBtn: this.$el.find('.js-module-test__btn'),
    }
  }

  addListeners() {
    // Example of a click listener
    this.dom.$closeBtn.on('click', this.handleClick.bind(this));
  }

  // Example event handler
  handleClick(e) {
    e.preventDefault();
    console.log('clicked this', e.currentTarget);
  }
}

export default ModuleTest;
