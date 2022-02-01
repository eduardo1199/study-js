/*As funções em JS recebem uma variavel por definição chamada "arguments"*/

function soma () {
  let soma = 0;

  for(let argument of arguments) {
    soma += argument;
  }

  return soma;
}

console.log(soma(1,5,8,7));

/**Callback function */

const array = [1, 2 , 5, 6, 8];

function greeting(name) {
  console.log('Olá ' + name);
}

function processUserInput(callback) {
  var name = 'Por favor insira seu nome.'
  callback(name);
}

processUserInput(greeting);

/**IIFE -> Immediately invoked function expression
 * São funções que são executadas assim que o código é executado
*/

((peso, idade) => {
  console.log(`Eduardo pesa ${peso}kg e tem ${idade} anos de idade`)

  //função executada automaticamente
})(70, 25);


/**Factory function (funções construtoras) -> utlizando this para modificar os valores das chaves da função*/

function factoryFunction(name, idade, peso, altura) {
  return {
    name: name,
    idade: idade,
    altura: altura,
    peso: peso,

    //Getter
    get pesoByNewton() {
      return (this.peso * 9.8).toFixed(2); // this ele pega o atributo daquela função que você chamou
    },

    get imcActual() {
      return (this.peso/this.altura**2).toFixed(2);
    },

    //Setter
    set exchangeName(newName){
      this.name = newName;
    },

    set exchangeIdade(newIdade){
      this.idade = newIdade;
    },

    set exchangePeso(newPeso){
      this.peso = newPeso;
    },

    imc: () => {
      return (peso/altura**2).toFixed(2);
    }

  }
}

const pessoa = factoryFunction('Eduardo', 22, 70, 1.74);

pessoa.exchangeName = 'Guilherme'; // você trocou o nome da pessoa usando o método setter.
pessoa.exchangePeso = 80; // mesmo trocando o valor do peso, a função imc permanece o valor passado como parametro

console.log(pessoa.imc());
