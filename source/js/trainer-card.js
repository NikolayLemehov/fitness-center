export default class TrainerCard {
  constructor(cardElement, name, setNumber, id) {
    this.cardElement = cardElement;
    this.name = name;
    this.setNumber = setNumber;
    this.id = id;
    this.nameElement = cardElement.querySelector(`.trainer-card__name`);
    this.isAllExisting = this.cardElement && this.nameElement;
  }

  active() {
    if (!this.isAllExisting) {
      return;
    }

    this.cardElement.classList.add(`trainer-card--${this.setNumber}`);
    // this.nameElement.textContent = `${this.name} ${this.id}`;
    this.nameElement.textContent = `${this.name}`;
  }
}
