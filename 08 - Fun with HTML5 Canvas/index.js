let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let growing = true

// setup
const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

resizeCanvas();

ctx.strokeStyle = "#BADA55"
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 1
ctx.globalCompositeOperation = 'color-burn'

function draw({offsetX, offsetY}) {
    if (!isDrawing) return

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath()
    // start from
    ctx.moveTo(lastX, lastY)
    // go to
    ctx.lineTo(offsetX, offsetY)
    ctx.stroke()
    // set last position
    lastX = offsetX
    lastY = offsetY

    // set new hue
    hue = (hue + 1 % 360)

    // constrain the brush
    // toggle between growing states to modulate brush size
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        growing = !growing
    }

    if (growing) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

canvas.addEventListener('mousedown', ({offsetX, offsetY}) => {
    isDrawing = true
    // set last position
    lastX = offsetX
    lastY = offsetY
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)