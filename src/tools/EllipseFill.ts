import Ellipse from "./Ellipse";

export default class EllipseFill extends Ellipse {

    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
        this.listen()
    }


    draw(x: number, y: number, rX: number, rY:number) {
        const img = new Image()
        if (this.saved != null) {
            img.src = this.saved
        }
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width,  this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.ellipse(x, y, rX,  rY, Math.PI , 0, 2 * Math.PI);
            this.ctx.fill()
            this.ctx.stroke()
        }
    }

}

