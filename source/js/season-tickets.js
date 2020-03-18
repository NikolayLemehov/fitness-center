export default class SeasonTickets {
  constructor() {
    this.tabs = document.querySelectorAll(`.season-tickets__tabs-item > button`);
    this.isAllExisting = this.tabs.length > 0;
  }

  active() {
    if (!this.isAllExisting) {
      return;
    }

    this.tabs.forEach((tab) => {
      tab.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        if (tab.parentElement.classList.contains(`season-tickets__tabs-item--active`)) {
          return;
        }
        this._onViewChange();
        tab.parentElement.classList.add(`season-tickets__tabs-item--active`);
      });
    });
  }

  _onViewChange() {
    this.tabs.forEach((tab) => {
      if (tab.parentElement.classList.contains(`season-tickets__tabs-item--active`)) {
        tab.parentElement.classList.remove(`season-tickets__tabs-item--active`);
      }
    });
  }
}
