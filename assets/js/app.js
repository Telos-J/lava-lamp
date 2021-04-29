
class Blob {
    constructor(id, v) {
        this.DOM = document.querySelector(id);
        this.y = parseInt(this.DOM.getAttribute('cy'));
        this.v = v;
    }

    move() {
        if (this.y < 100 || this.y > 380) this.v *= -1;
        this.y += this.v;
        this.DOM.setAttribute('cy', this.y);
    }

}

const blob1 = new Blob('#blob1', -1)
const blob2 = new Blob('#blob2', 1)
const blob3 = new Blob('#blob3', 1)


window.setInterval(() => {
    blob1.move();
    blob2.move();
    blob3.move();
}, 100)

