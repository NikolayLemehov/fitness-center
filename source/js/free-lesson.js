const $ = global.$;

export default class FreeLesson {
  constructor() {
    this.section = document.querySelector(`.free-lesson`);
    this.form = this.section.querySelector(`form`);
    this.name = this.form.querySelector(`input[name="name"]`);
    this.phone = $(`.free-lesson input[name="phone"]`);
    this.btn = this.form.querySelector(`button[type="submit"]`);
    this.isAllExisting = this.section && this.form && this.name && this.phone && this.btn;
  }

  active() {
    if (!this.isAllExisting) {
      return;
    }
    this.phone.mask(`+7(000)0000000`);
    this.btn.addEventListener(`click`, (evt) => {
      this._validatePhone();
      if (this.form.checkValidity()) {
        evt.preventDefault();
      }
    });
  }

  _validatePhone() {
    const string = this.phone.value;
    const result = string.match(/\+7\(\d{3}\)\d{7}/);
    const foundMatch = result ? result[0] : null;
    if (foundMatch === string) {
      this.phone.setCustomValidity(``);
    } else {
      this.phone.setCustomValidity(`Номер телефона должен соответствовать следующий маске +7(000)0000000`);
    }
  }
}
