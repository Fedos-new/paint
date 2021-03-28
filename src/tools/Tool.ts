

export default class Tool {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D

    constructor(canvas: any ) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.destroyEvents()

    }

    set fillColor(color: string) {
        this.ctx.fillStyle = color
    }
    set strokeColor(color: string) {
        this.ctx.strokeStyle = color
    }
    set lineWidth(width:string) {
        this.ctx.lineWidth = Number(width)
    }


    destroyEvents() {
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
        this.canvas.onmousemove = null
    }

}
