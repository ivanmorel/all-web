import { waterConversion } from "../utils/conversionMethods";

class DonationsBar {
  constructor(el) {
    this.$el = $(el);
    this.setDefaults();
    this.init();
  }

  mockResponse = {
    ammount: (Math.random() * 100000) + 1
  };

  setDefaults() {
    this.dom = {
      $title: this.$el.find(".js-donations-bar__title"),
    };
    this.conversionMethod = waterConversion;
  }

  async init() {
    const donationsAmmount = await this.getDonationsAmmount();
    const donationAmmountConverted = this.conversionMethod(donationsAmmount);
    this.dom.$title.html(`With your purchases, we have provided clean water for ${donationAmmountConverted} people for a year, with <em>The Thirst Project</em>`);
  }

  async getDonationsAmmount() {
    return this.parseResponse(await this.fetchDonationsData());
  }

  async fetchDonationsData() {
    // TODO: Implement connection with BE
    return this.mockResponse;
  }
  parseResponse(response) {
    // TODO: Implement needed parsing
    return response.ammount;
  }
}

export default DonationsBar;
