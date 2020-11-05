import { waterConversion } from "../utils/conversionMethods";

class DonationsBar {
  constructor(el) {
    this.$el = $(el);
    this.setDefaults();
    this.init();
  }

  mockResponse = {
    amount: Math.random() * 100000 + 1,
  };

  setDefaults() {
    this.dom = {
      $title: this.$el.find(".js-donations-bar__title"),
    };
    this.conversionMethod = waterConversion;
  }

  async init() {
    const donationsAmount = await this.getDonationsAmount();
    const donationAmountConverted = this.conversionMethod(donationsAmount);
    this.dom.$title.html(
      `With your purchases, we have provided clean water for ${donationAmountConverted} people for a year, with <em>The Thirst Project</em>`
    );
  }

  async getDonationsAmount() {
    return this.parseResponse(await this.fetchDonationsData());
  }

  async fetchDonationsData() {
    // TODO: Implement connection with BE
    let result = false;
    try {
      result = await $.ajax({
        type: "GET",
        url: "https://all-api.dev.geno.me/api/v1/orders_amount",
      });
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error getting total donations", error);
      return this.mockResponse;
    }
  }

  parseResponse(response) {
    return response.amount;
  }
}

export default DonationsBar;
