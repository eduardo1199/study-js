function calculadora () {
  return {
    display: document.querySelector('.display'),

    criaCalculadora() {
      this.buttonUtils(); //this = calculadora
    },

    buttonUtils() {
      document.addEventListener('click', (e) => {
        getElement = e.target;

        if(getElement.classList.contains('btn-number')) {
          this.contentByDisplay(getElement.innerText);
        }

        if(getElement.classList.contains('btn-clear')) {
          this.display.value = '';
        }

        if(getElement.classList.contains('btn-del')) {
          this.display.value = this.display.value.slice(0, -1);
        }

        if(getElement.classList.contains('btn-eq')) {
          this.calculate();
        }
      });
    },

    contentByDisplay(textElement){
      this.display.value += textElement;
    },

    calculate(){
      try {
        const result = eval(this.display.value);

        if(!result) {
          new Error("Valores inválidos");
          return;
        }
  
        this.display.value = result;
      } catch(e) {
        alert(e.message);
      }
    },

    keyPressCalculator() {
      this.display.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
          this.calculate();
        }
      });
    }
  }
}

const createCalculator = calculadora();
createCalculator.criaCalculadora();