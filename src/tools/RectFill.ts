import Rect from "./Rect";


export default class RectFill extends Rect {

    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
        this.listen()
    }


    draw(x: number, y: number, w: number, h: number) {
        const img = new Image()
        img.src = this.saved as string
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.rect(x, y, w, h)
            this.ctx.fill()
            this.ctx.stroke()
        }
    }
}

