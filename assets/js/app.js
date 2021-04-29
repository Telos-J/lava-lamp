const blob1 = document.querySelector('#blob1')
const blob2 = document.querySelector('#blob2')
const blob3 = document.querySelector('#blob3')

window.setInterval(() => {
    const cy1 = parseInt(blob1.getAttribute('cy'))
    blob1.setAttribute('cy', cy1 - 1)
    const cy2 = parseInt(blob3.getAttribute('cy'))
    blob3.setAttribute('cy', cy2 + 1)
    const cy3 = parseInt(blob2.getAttribute('cy'))
    blob2.setAttribute('cy', cy3 + 1)
}, 100)

