const timer = document.querySelector('.timer')
const c = document.getElementById('myCanvas')
const ctx = c.getContext('2d')

var segundos = 0
var intervalId
var x = 0

function seconds() {
  document.getElementById('time').innerHTML = `${
    (Math.floor(segundos / 1000) < 10 ? '0' : '') + Math.floor(segundos / 1000)
  }:${Math.floor((segundos % 1000) / 10)}`
  requestAnimationFrame(animate)
  segundos += 1000 / (10 / 3 / 0.4)
}

function startTimer() {
  timer.style.display = 'flex'
  segundos = 0
  x = 0
  intervalId = setInterval(seconds, 1000 / (10 / 3 / 0.4))
  setTimeout(stopTimer, 30 * 1000)
}

function stopTimer() {
  timer.style.display = 'none'
  clearInterval(intervalId)
  ctx.clearRect(0, 0, 5000, 40)
}

function animate() {
  ctx.beginPath()
  ctx.arc(x, 20, 20, 0, 2 * Math.PI)
  ctx.fillStyle = 'rgb(166, 49, 172)'
  ctx.fill()
  ctx.closePath()
  x = x + window.innerWidth / 250
}
