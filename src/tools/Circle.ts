import Tool from "./Tool";


export default class Circle extends Tool {
    mouseDown: boolean | undefined
    startX: number = 0
    startY: number = 0
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
        this.startX = e.pageX - (e.target as HTMLElement).offsetLeft
        this.startY = e.pageY - (e.target as HTMLElement).offsetTop
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            let currentX = e.pageX - (e.target as HTMLElement).offsetLeft
            let currentY = e.pageY - (e.target as HTMLElement).offsetTop
            let width = currentX - this.startX
            let height = currentY - this.startY
            let r = Math.sqrt(width ** 2 + height ** 2)
            this.draw(this.startX, this.startY, r)
        }
    }

    draw(x: number, y: number, r: number) {
        const img = new Image()
        img.src = this.saved as string
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.arc(x, y, r, 0, 2 * Math.PI, false)
            this.ctx.stroke()
        }
    }
}

