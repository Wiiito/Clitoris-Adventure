//Só msm pra brincar
const sperms = document.getElementsByClassName('sperm')

function addMargin(player) {
  players[player].score += 25
  sperms[player].style.marginLeft = `${players[player].score}px`
}

const minLeftMargin = (55 * board.width) / 1920
const minTopMargin = (30 * board.height) / 1080

const randomPosX = [5, 20, 10, 30]
const randomPosY = [5, 20, 40, 50]

var totalPosX = []
var totalPosY = []

const houseWidth = (264 * board.width) / 1920
const houseHeight = (174 * board.height) / 1080

//Colocando os jogadores na posição inicial com base na escala e tablueiro
for (let i = 0; i < 4; i++) {
  var scale = (board.width * 0.2) / 1166
  sperms[i].style.transform = `scale(${scale})`
  scale = scale ** -1

  const realHeight = sperms[i].height / scale
  const fakeTopMargin = (sperms[i].height - realHeight) / 2
  totalPosY[i] =
    fakeTopMargin - minTopMargin - (randomPosY[i] * scale ** -1) / 0.2

  sperms[i].style.marginTop = -totalPosY[i] + 'px'

  const realWidth = sperms[i].width / scale
  const fakeLeftMargin = (sperms[i].width - realWidth) / 2
  totalPosX[i] =
    fakeLeftMargin - minLeftMargin - (randomPosX[i] * scale ** -1) / 0.2

  sperms[i].style.marginLeft = -totalPosX[i] + 'px'
}

function movePlayer(player, houses) {
  changePlayer(player)

  let housesLeft = houses, actualHouse = players[player].score
  players[player].score += houses
  if (players[player].score > 6 && players[player].score <= 8) {
    totalPosX[player] = ((sperms[player].width - (sperms[player].width / scale)) / 2) - minLeftMargin - ((randomPosX[player] * scale ** -1) / 0.2) - (houseWidth * 6)
    housesLeft = actualHouse + houses - 6
    sperms[player].style.transitionDuration = `${(500 * (6 - housesLeft))/1000}s`
    move(player, (6 - housesLeft) * 500)
    setTimeout(() => {
      sperms[player].style.transitionDuration = `0.5s`
      sperms[player].style.transform = `rotate(90deg) scale(${scale ** -1})`
      setTimeout(() => {
        totalPosY[player] -= Math.min(housesLeft, 2) * houseHeight
        sperms[player].style.transitionDuration = `${(500 * Math.min(housesLeft, 2))/1000}s`
        move(player, Math.min(housesLeft, 2) * 500)
      }, 500)
    }, (6 - housesLeft) * 500)
  } else if(players[player].score > 8 && players[player].score <= 14) {
    //Saindo da casa 8
    sperms[player].style.transitionDuration = `0.5s`
    sperms[player].style.transform = `rotate(180deg) scale(${scale ** -1})`
    setTimeout(() => {
      sperms[player].style.transitionDuration = `3s`
      totalPosX[player] += houses * houseWidth
      move(player, 3000)
    }, 500);
  } else {
    totalPosX[player] -= housesLeft * houseWidth
    sperms[player].style.transitionDuration = `${(500 * housesLeft)/1000}s`
    move(player, housesLeft * 500)
  }
}

function move(player, time) {
  startAnimation()
  sperms[player].style.marginLeft = -totalPosX[player] + 'px'
  sperms[player].style.marginTop = -totalPosY[player] + 'px'

  setTimeout(() => {
    stopAnimation()
  }, time)
}