class Range {
  constructor(id, { maxValue = 100, minValue = 0 }) {
    this.maxValue = maxValue;
    this.minValue = minValue;
    this.id = id;

    // Получаем каждую обертку инпутов
    this.range = document.querySelector(`${this.id} .inp-range`);
    this.number = document.querySelector(`${this.id} .inp-number`);
  }

  // Функции инпута range
  rangePosition() {
    const rangeBtn = document.querySelector(`${this.id} .input-range-btn-fake`);
    const inputRangeColorFake = document.querySelector(`${this.id} .input-range-color-fake`);

    this.range.setAttribute('min', this.minValue);
    this.range.setAttribute('max', this.maxValue);

    let rangeValue = this.range.value;
    rangeBtn.style.left = rangeValue / Number(this.maxValue / 100) + '%';
    inputRangeColorFake.style.width = rangeValue / Number(this.maxValue / 100) + '%';
  }

  // Функция цифрового инпута
  numberValue() {
    this.number.value = this.range.value;
  }

  // Все функции
  goRange() {
    this.numberValue();
    this.rangePosition();

    this.range.addEventListener('input', () => {
      this.rangePosition();
      this.numberValue();
    });

    this.number.addEventListener('input', () => {
      this.range.value = this.number.value;
      if(this.number.value < 0) {
            this.number.value = 0;
        }
      this.rangePosition();
    });
  }
}
