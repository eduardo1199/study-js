const arrayNames = ['eduardo', 'guilherme', 'andreza', 'fabio'];

const copyArrayNammes = [...arrayNames] //caso queira copiar os elementos para outro arrray

const lengthOfArrayNames = arrayNames.length // tamanaho do array
arrayNames.pop() //excluir último elemento
arrayNames.shift() // remover primeiro array
arrayNames.push('fabio') // adicionar elemento no fim
arrayNames.unshift('eduardo') //adicionar elementos no começo do array
const newArray = arrayNames.slice(1, 3) //repartir array do índice 1 ate 3 "['guilherme, andreza']"
const newArrayCopy = copyArrayNammes.slice(0, -1) //repartir array do índice 1 ate 3 "['eduardo', 'guilherme', 'andreza']"

const fromArray = 'Eduardo Soares de Araujo Aquino'.split(' '); //separar string em array
const joinArray = arrayNames.join(' '); // juntar elementos do array em string

const eduardo = {
  name: 'eduardo'
}

eduardo.name = 'Andreza'

console.log(eduardo);
