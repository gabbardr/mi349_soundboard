var first = document.getElementById("first")
var second = document.getElementById("second")
var third = document.getElementById("third")

var music = new Audio('baby_x.wav')
var music2 = new Audio('bomb_x.wav')
var music3 = new Audio('blurp_x.wav')

first.addEventListener('click', function () {
    music.play()
})

second.addEventListener('click', function () {
    music2.play()
})

third.addEventListener('click', function () {
    music3.play()
})