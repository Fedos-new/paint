import {makeAutoObservable} from "mobx";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import Ellipse from "../tools/Ellipse";
import EllipseFill from "../tools/EllipseFill";
import CircleFill from "../tools/CircleFill";
import RectFill from "../tools/RectFill";

class ToolState {
    tool: ToolStateType = null

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool: ToolStateType) {
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

}

export default new ToolState()

export type ToolStateType =
    Brush | Rect | Circle | Eraser | Line
    | Ellipse | EllipseFill | RectFill| CircleFill | null
