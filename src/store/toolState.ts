import {makeAutoObservable} from "mobx";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";

class ToolState {
    tool: ToolType = null
    isActive: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool: ToolType) {
        this.tool = tool
    }
    setFillColor(color: string) {
        if(this.tool != null) this.tool.fillColor = color
    }
    setStrokeColor(color: string) {
       if(this.tool != null) this.tool.strokeColor = color
    }

    setLineWidth(width: string) {
        if(this.tool != null) this.tool.lineWidth = width
    }

    setActive(isActive: boolean) {
        this.isActive = isActive
        console.log(this.isActive)
    }

}

export default new ToolState()

type ToolType = Brush | Rect | Circle| Eraser | Line | null
