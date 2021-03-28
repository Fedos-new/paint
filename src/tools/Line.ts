import Tool from "./Tool";


export default class Line extends Tool {
    mouseDown: boolean | undefined
    currentX: number | undefined
    currentY: number | undefined
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
        this.currentX = e.pageX - (e.target as any).offsetLeft
        this.currentY = e.pageY - (e.target as any).offsetTop
        this.ctx.moveTo(this.currentX, this.currentY)
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            this.draw(e.pageX - (e.target as any).offsetLeft, e.pageY - (e.target as any).offsetTop)
        }
    }

    draw(x: number, y: number) {
        const img = new Image()
        if (this.saved != null) {
            img.src = this.saved
        }
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            if (this.currentX != null && this.currentY != null) {
                this.ctx.moveTo(this.currentX, this.currentY)
            }
            this.ctx.lineTo(x, y)
            this.ctx.fill()
            this.ctx.stroke()
        }
    }
}

