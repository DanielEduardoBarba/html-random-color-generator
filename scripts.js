
const background = document.getElementById('htmlBody')

const hexValue = document.getElementById("hexValue")

function random(){
    let hex ="#"

    hex+=(Math.floor(Math.random()*255)).toString(16)
    hex+=(Math.floor(Math.random()*255)).toString(16)
    hex+=(Math.floor(Math.random()*255)).toString(16)

    background.style.backgroundColor = hex
    hexValue.innerText = hex

  }