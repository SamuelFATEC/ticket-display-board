// Letras do alfabeto, sem o P, pois a letra P significará PREFERENCIAL
const chars = "abcdefghijklmnoqrstuvwxyz"
const passwords = []

// Algorítmo que gera a senha
let counter = 0
let priorityCounter = 0
let choiceChar = 0
function randomGeneratePassword({ isPriority }) {
  /**
   * Aqui, se o paciente for preferencial, a senha sai como PNN;
   * Se não for, ele conta de A à Z, sem o P, e a senha sai como ANN;
   * Se o número for maior que 99, cai a próxima letra, exemplo, A99, B01;
   * Se cair Z99, deve voltar para o primeira senha, A01;
   */
  return isPriority && `P${priorityCounter.toString().padStart(2, '0')}` || `${chars[0].toUpperCase()}${counter.toString().padStart(2, '0')}`
}

const passwordExample = {
  client: 'Gustavo o Sênior',
  password: randomGeneratePassword({ isPriority: false }),
}

console.log(passwordExample)
