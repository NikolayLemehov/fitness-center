import Slider from './slider';

export default class Trainers {
  constructor() {
    this.section = document.querySelector(`.trainers`);
    this.cardCollection = this.section.querySelectorAll(`.trainer-card`);
    this.isAllExisting = this.section && this.cardCollection.length > 0;
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
