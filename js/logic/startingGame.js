const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const playerIcons = ['♣', '♥', '♠', '♦']
const players = [
  {
    name: urlParams.get('player0'),
    icon: urlParams.getAll('naipe')[0] || 0,
    score: 0,
  },
  {
    name: urlParams.get('player1'),
    icon: urlParams.getAll('naipe')[1] || 1,
    score: 0,
  },
  {
    name: urlParams.get('player2'),
    icon: urlParams.getAll('naipe')[2] || 2,
    score: 0,
  },
  {
    name: urlParams.get('player3'),
    icon: urlParams.getAll('naipe')[3] || 3,
    score: 0,
  },
]

const playerContaier = document.querySelector('.players')

for (let i = 0; i < players.length; i++) {
  playerContaier.querySelectorAll('.score')[i].innerText = players[i].score
  playerContaier.querySelectorAll('.icon')[i].innerText =
    playerIcons[players[i].icon]
  playerContaier.querySelectorAll('.name')[i].innerText = players[i].name
}
