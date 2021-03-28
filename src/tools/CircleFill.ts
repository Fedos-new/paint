import Circle from "./Circle";


export default class CircleFill extends Circle {

    constructor(canvas: HTMLCanvasElement | null) {
        super(canvas)
        this.listen()
    }

    draw(x: number, y: number, r: number) {
        const img = new Image()
        if (this.saved != null) {
            img.src = this.saved
        }
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.arc(x, y, r, 0, 2 * Math.PI, false)
            this.ctx.fill()
            this.ctx.stroke()
        }
    }

}

