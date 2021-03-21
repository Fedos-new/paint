import {makeAutoObservable} from "mobx";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";

class ToolState {
    tool: Brush | Rect | null = null

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool: Brush | Rect | Circle| null) {
        this.tool = tool
    }
}

export default new ToolState()
