import {makeAutoObservable} from "mobx";

class CanvasState {
    canvas: HTMLCanvasElement | null = null
    undoList: any[] = []
    redoList: any[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas: HTMLCanvasElement | null) {
        this.canvas = canvas
    }

    pushToUndo(data: any) {
        this.undoList.push(data)


    }

    pushToRedo(data: any) {
        this.redoList.push(data)
    }

    undo() {
        if (this.canvas) {
            let ctx = this.canvas.getContext('2d')

            if (this.undoList.length > 0) {
                let dataUrl = this.undoList.pop()
                this.redoList.push(dataUrl) //  для возврата отменны
                let img = new Image()
                img.src = dataUrl
                img.onload = () => {
                    if (ctx && this.canvas) {
                        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
                    }
                }
            } else {
                if (ctx) ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }
        }
    }

    redo() {
        if (this.canvas) {
            let ctx = this.canvas.getContext('2d')
            if (this.redoList.length > 0) {
                let dataUrl = this.redoList.pop()
                this.undoList.push(this.canvas.toDataURL()) // добавляем текущее состояние canvas для отменны возврата
                let img = new Image()
                img.src = dataUrl
                img.onload = () => {
                    if (ctx && this.canvas) {
                        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
                    }
                }
            }
        }
    }
}

export default new CanvasState()
