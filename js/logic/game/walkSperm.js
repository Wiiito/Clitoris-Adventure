//Só msm pra brincar
const sperms = document.getElementsByClassName('sperm')
function addMargin(player) {
  players[player].score += 25
  sperms[player].style.marginLeft = `${players[player].score}px`
}