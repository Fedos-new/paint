import Tool from "./Tool";


export default class Brush extends Tool{
    mouseDown: boolean | undefined
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
    mouseDownHandler(e:MouseEvent) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - (e.target as any).offsetLeft, e.pageY - (e.target as any).offsetTop)
    }
    mouseMoveHandler(e:MouseEvent) {
        if(this.mouseDown) {
            this.draw(e.pageX - (e.target as any).offsetLeft, e.pageY - (e.target as any).offsetTop)
        }
    }

    draw(x:number,y:number) {
        this.ctx.lineTo(x,y)
        // this.ctx.strokeStyle = ''
        this.ctx.stroke()
    }
}
