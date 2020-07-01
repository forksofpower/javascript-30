/**
 * JS Drum Kit for JavaScript30
 * author: @forksofpower
 */
const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    // listen for the end of each transition
    key.addEventListener('transitionend', removeTransition)
})

function removeTransition(e) {
    // remove `playing` class if transform is finished
    if (e.propertyName !== "transform") return;
    e.target.classList.remove('playing')
}

function getPad(keycode) {
    return document.querySelector(`.key[data-key='${keycode}']`)
}

function getAudio(keycode) {
    return document.querySelector(`audio[data-key='${keycode}']`)
}

function playSound(e) {
    // check if its a drum pad key
    let pad = getPad(e.keyCode)
    if (!pad) return;
    // play audio
    let audio = getAudio(e.keyCode)
    audio.currentTime = 0
    audio.play()
    // apply `playing` class    
    pad.classList.add('playing')
}

window.addEventListener('keydown', playSound)