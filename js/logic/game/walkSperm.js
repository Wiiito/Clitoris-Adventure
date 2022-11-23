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
  startAnimation()
  players[player].score += houses

  if (players[player].score > 6) {
    totalPosX[player] = ((sperms[player].width - (sperms[player].width / scale)) / 2) - minLeftMargin - ((randomPosX[player] * scale ** -1) / 0.2) - (houseWidth * 6) //No inicio deus e eu sabia o que isso faz, agora só ele sabe
    sperms[player].style.transitionDuration = `1.25s`
    move(player, 1250)
    setTimeout(() => {
      sperms[player].style.transitionDuration = '0.5s'
      sperms[player].style.transform = `rotate(90deg) scale(${scale ** -1})`
      setTimeout(() => {
        startAnimation()
        sperms[player].style.transitionDuration = `1.25s`
        totalPosY[player] += Math.max(6 - players[player].score, -2) * houseHeight
        move(player, 1250)
      }, 500)
    }, 1250)
    /*timeDiference = players[player].score - 6 * 500
    sperms[player].style.transitionDuration = `${timeDiference/1000}s`*/
  } else {
    totalPosX[player] -= houses * houseWidth
    sperms[player].style.transitionDuration = `3s`
    move(player, 3000)
  }

  
}

function move(player, time) {
  sperms[player].style.marginLeft = -totalPosX[player] + 'px'
  sperms[player].style.marginTop = -totalPosY[player] + 'px'

  setTimeout(() => {
    stopAnimation()
  }, time)
}