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

//Colocando os jogadores na posição inicial com base na escala e tablueiro
for (let i = 0; i < 4; i++) {
  var scale = (board.width * 0.2) / 1166
  sperms[i].style.transform = `scale(${scale})`
  scale = scale ** -1

  const realHeight = sperms[i].height / scale
  const fakeTopMargin = (sperms[i].height - realHeight) / 2
  var totalPosY =
    fakeTopMargin - minTopMargin - (randomPosY[i] * scale ** -1) / 0.2

  sperms[i].style.marginTop = -totalPosY + 'px'

  const realWidth = sperms[i].width / scale
  const fakeLeftMargin = (sperms[i].width - realWidth) / 2
  var totalPosX =
    fakeLeftMargin - minLeftMargin - (randomPosX[i] * scale ** -1) / 0.2

  sperms[i].style.marginLeft = -totalPosX + 'px'
}
