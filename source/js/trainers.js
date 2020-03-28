import TrainerCard from './trainer-card';

const $ = global.$;
const names = [`Анна Павлова`, `Алексей Лавров`, `Александр Пашков`, `Мария Кетова`];
const SLIDER_SET_COUNT = 4;

export default class Trainers {
  constructor() {
    this.section = document.querySelector(`.trainers`);
    this.cardCollection = this.section ? this.section.querySelectorAll(`.trainer-card`) : null;
    this.$slider = $(`.slider--trainers`);
    this.cardCount = this.cardCollection ? this.cardCollection.length : null;
    this.isAllExisting = this.section && this.cardCount > 0 && this.$slider;
    this.slider = null;
  }

  active() {
    if (!this.isAllExisting) {
      return;
    }
    this._slickStart();
    this.cardCollection.forEach((it, i) => {
      const setId = i % SLIDER_SET_COUNT + 1;
      const trainerCard = new TrainerCard(it, names[setId - 1], setId, i + 1);
      trainerCard.active();
    });
  }

  _slickStart() {
    this.$slider.slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
  }
}
