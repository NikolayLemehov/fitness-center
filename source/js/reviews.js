const $ = global.$;

export default class Reviews {
  constructor() {
    this.section = document.querySelector(`.reviews`);
    this.cardCollection = this.section ? this.section.querySelectorAll(`.review-card`) : null;
    this.$slider = $(`.slider--reviews`);
    this.cardCount = this.cardCollection ? this.cardCollection.length : null;
    this.isAllExisting = this.section && this.$slider && this.cardCount > 0;
  }

  active() {
    if (!this.isAllExisting) {
      return;
    }
    this.$slider.slick();
  }
}
