import Tool from "./Tool";

export default class Ellipse extends Tool {
    mouseDown: boolean | undefined
    startX: number = 0
    startY: number = 0
    saved: string | undefined

    constructor(canvas: HTMLCanvasElement | null) {
        super(canvas)
        this.listen()
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseUpHandler() {
        this.mouseDown = false
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.startX = e.pageX - (e.target as any).offsetLeft
        this.startY = e.pageY - (e.target as any).offsetTop
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            let currentX = e.pageX - (e.target as any).offsetLeft
            let currentY = e.pageY - (e.target as any).offsetTop
            let width = currentX - this.startX
            let height = currentY - this.startY
            let rX = Math.sqrt(width**2 )
            let rY = Math.sqrt(height**2)
            this.draw(this.startX, this.startY, rX,rY)
        }
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
            this.ctx.stroke()
        }
    }

}

