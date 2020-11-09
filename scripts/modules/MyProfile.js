import jQuery from "jquery";

class MyProfile {
  constructor(el) {
    this.$el = $(el);
    this.setDefaults();
    this.init();
  }

  setDefaults() {
    this.Accentuate = window.Accentuate || false;
  }

  init() {
    console.log("from ES6");
    if (this.Accentuate) {
      console.log("accentuate", this.Accentuate);
      this.Accentuate(this.$el, function (data) {
        console.log(data, data.status, data.message);
      });
    }
  }
}

export default MyProfile;
