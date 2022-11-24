function wrongAnswer() {
  movePlayer(turn, -houses)
  turnPlay()
  setTimeout(() => {
    callOverlay('wrong')
    setTimeout(() => {
      closeOverlay()
    }, 3000)
  }, 600)
}

function rightAnswer() {
  if (players[turn].score >= 20) {
    console.log('Player ' + turn + ' won!')
    return
  }
  setTimeout(() => {
    callOverlay('right')
    setTimeout(() => {
      closeOverlay()
    }, 3000)
  }, 600)
  turnPlay()
}
