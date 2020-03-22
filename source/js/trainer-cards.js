import TrainerCard from './trainer-card';

const FIRST_CARD_NUMBER = 0;
const names = [`Анна Павлова`, `Алексей Лавров`, `Александр Пашков`, `Мария Кетова`];
const SLIDER_SET_COUNT = 4;

export default class TrainerCards {
  constructor() {
    this.trainers = document.querySelector(`.trainers`);
    this.slider = this.trainers.querySelector(`.slider`);
    this.carousel = this.slider.querySelector(`.slider__carousel`);
    this.ul = this.carousel.querySelector(`.slider__list`);
    this.liCollection = this.carousel.querySelectorAll(`.slider__item`);
    this.leftBtn = this.slider.querySelector(`.slider__btn--left`);
    this.rightBtn = this.slider.querySelector(`.slider__btn--right`);

    this.cardCollection = this.trainers.querySelectorAll(`.trainer-card`);
    this.isAllExisting = this.cardCollection.length > 0 && this.cardCollection.length === this.liCollection.length
      && this.trainers && this.slider && this.carousel && this.leftBtn && this.rightBtn;

    this.cardCount = null;
    this.visibleCardCount = null;
    this.firstVisibleCard = FIRST_CARD_NUMBER;
  }

  active() {
    if (!this.isAllExisting) {
      return;
    }

    this.ul.style.left = `0px`;
    this._getParameter();

    this.cardCollection.forEach((it, i) => {
      const setId = i % SLIDER_SET_COUNT + 1;
      const trainerCard = new TrainerCard(it, names[setId - 1], setId, i + 1);
      trainerCard.active();
    });

    this.leftBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      switch (true) {
        case (this.firstVisibleCard >= this.visibleCardCount):
          this.firstVisibleCard -= this.visibleCardCount;
          break;
        case (this.firstVisibleCard < this.visibleCardCount
          && this.firstVisibleCard > FIRST_CARD_NUMBER):
          this.firstVisibleCard = FIRST_CARD_NUMBER;
          break;
        case (this.firstVisibleCard <= FIRST_CARD_NUMBER):
          this.firstVisibleCard = this.cardCount - this.visibleCardCount;
      }
      this._setStyleLeft();
    });

    this.rightBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      switch (true) {
        case (this.firstVisibleCard <= this.cardCount - 2 * this.visibleCardCount):
          this.firstVisibleCard += this.visibleCardCount;
          break;
        case (this.firstVisibleCard > this.cardCount - 2 * this.visibleCardCount
          && this.firstVisibleCard < this.cardCount - this.visibleCardCount):
          this.firstVisibleCard = this.cardCount - this.visibleCardCount;
          break;
        case (this.firstVisibleCard >= this.cardCount - this.visibleCardCount):
          this.firstVisibleCard = FIRST_CARD_NUMBER;
      }
      this._setStyleLeft();
    });

    window.addEventListener(`resize`, () => {
      this._getParameter();
      this._setStyleLeft();
    });
  }

  _getParameter() {
    const carouselWidth = this.carousel.offsetWidth;
    const ulWidth = this.ul.offsetWidth;
    const liWidth = this.liCollection[0].offsetWidth;
    this.cardCount = Math.round(ulWidth / liWidth);
    this.visibleCardCount = Math.round(carouselWidth / liWidth);
  }

  _setStyleLeft() {
    const shiftLeft = this.liCollection[0].offsetWidth * this.firstVisibleCard;
    this.ul.style.left = `-${shiftLeft}px`;
  }
}
