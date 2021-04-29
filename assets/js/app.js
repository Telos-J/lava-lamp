const blob1 = document.querySelector('#blob1')
const blob2 = document.querySelector('#blob2')
const blob3 = document.querySelector('#blob3')

window.setInterval(() => {
    const cy = parseInt(blob1.getAttribute('cy'))
    blob1.setAttribute('cy', cy - 1)
}, 100)
