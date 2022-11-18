// SELECIONAR ELEMENTOS
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('rollDice')
let dadoRolando = document.querySelector('#dadoRolando')

function rollDice() {
  //Limpando ultimo número sorteado
  imgDado.style.display = 'block'
  imgDado.setAttribute('src', 'imgs/0.png')

  // adicionar a animacao
  imgDado.classList.add('animar')

  // tocar o efeito sonoro
  dadoRolando.play()

  // usar setTimeout para executar as acoes apos 1.25 segundos
  setTimeout(function () {
    // ARMAZENAR NUMERO SORTEADO NA VARIAVEL
    numeroSorteado = getRandomInt(1, 6)

    // definir atributo src com base no numero
    imgDado.setAttribute('src', 'imgs/' + numeroSorteado + '.png')

    // retirar a animacao
    imgDado.classList.remove('animar')
  }, 1250)
}

imgDado.addEventListener('click', hideDice)

function hideDice() {
  imgDado.style.display = 'none'
}

// FUNCAO que gera numero randomico inteiro
// incluindo o minimo e o maximo
function getRandomInt(min, max) {
  min = Math.ceil(min) // arredonda para cima  ceil  = teto
  max = Math.floor(max) // arredonda para baixo floor = piso
  return Math.floor(Math.random() * (max - min + 1)) + min
}
