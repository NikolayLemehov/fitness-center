export default class SeasonTickets {
  constructor() {
    this.tabs = document.querySelectorAll(`.season-tickets__tabs-item > button`);
    this.sets = document.querySelectorAll(`.season-tickets__offers-item`);
    this.isAllExisting = this.tabs.length > 0 && this.sets.length > 0 && this.tabs.length === this.sets.length;
    this.currentTab = null;
    this.numberToTabSet = new Map();
    this.tabToSet = new Map();
  }

  active() {
    if (!this.isAllExisting) {
      return;
    }

    this.tabs.forEach((tab, i) => {
      if (tab.parentElement.classList.contains(`season-tickets__tabs-item--active`)) {
        this.currentTab = i;
      }
      this.numberToTabSet.set(i, {
        number: i,
        tab,
        set: this.sets[i],
      });
      this.tabToSet.set(tab, {
        number: i,
        set: this.sets[i],
      });

      tab.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        if (tab.parentElement.classList.contains(`season-tickets__tabs-item--active`)) {
          return;
        }
        this._onViewChange();
        tab.parentElement.classList.add(`season-tickets__tabs-item--active`);

        this.numberToTabSet.get(this.currentTab).set.classList.remove(`season-tickets__offers-item--active`);
        this.tabToSet.get(tab).set.classList.add(`season-tickets__offers-item--active`);
        this.currentTab = this.tabToSet.get(tab).number;
      });
    });

    this.sets.forEach((set, i) => {
      if (i === this.currentTab) {
        if (!set.classList.contains(`season-tickets__tabs-item--active`)) {
          set.classList.add(`season-tickets__tabs-item--active`);
        }
      } else {
        if (set.classList.contains(`season-tickets__tabs-item--active`)) {
          set.classList.remove(`season-tickets__tabs-item--active`);
        }
      }
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
