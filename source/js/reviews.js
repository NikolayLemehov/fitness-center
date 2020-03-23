import Slider from './slider';

export default class Reviews {
  constructor() {
    this.section = document.querySelector(`.reviews`);
    this.cardCollection = this.section.querySelectorAll(`.review-card`);
    this.isAllExisting = !!this.section;
    this.slider = null;
  }

  active() {
    if (!this.isAllExisting) {
      return;
    }
    this.slider = new Slider(this.section, this.cardCollection);
    this.slider.active();
  }
}
