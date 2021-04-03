import Tool from "./Tool";


export default class Line extends Tool {
    mouseDown: boolean | undefined
    currentX: number | undefined
    currentY: number | undefined
    saved: string | undefined


    constructor(canvas: HTMLCanvasElement) {
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
        this.currentX = e.pageX - (e.target as HTMLElement).offsetLeft
        this.currentY = e.pageY - (e.target as HTMLElement).offsetTop
        this.ctx.moveTo(this.currentX, this.currentY)
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            this.draw(e.pageX - (e.target as HTMLElement).offsetLeft, e.pageY - (e.target as HTMLElement).offsetTop)
        }
    }

    draw(x: number, y: number) {
        const img = new Image()
        img.src = this.saved as string
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.moveTo(this.currentX as number, this.currentY as number)
            this.ctx.lineTo(x, y)
            this.ctx.fill()
            this.ctx.stroke()
        }
    }
}

