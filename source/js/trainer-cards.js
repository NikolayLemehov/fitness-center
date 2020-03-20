import TrainerCard from './trainer-card';

const names = [`Анна Павлова`, `Алексей Лавров`, `Александр Пашков`, `Мария Кетова`];
const SLIDER_SET_COUNT = 4;

export default class TrainerCards {
  constructor() {
    this.cardsCollection = document.querySelectorAll(`.trainer-card`);
    this.isAllExisting = this.cardsCollection.length > 0;
  }

  active() {
    if (!this.isAllExisting) {
      return;
    }

    this.cardsCollection.forEach((it, i) => {
      const setId = i % SLIDER_SET_COUNT + 1;
      const trainerCard = new TrainerCard(it, names[setId - 1], setId, i + 1);
      trainerCard.active();
    });
  }
}
