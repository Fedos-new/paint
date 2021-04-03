import React, {useState} from 'react';
import '../../../styles/toolBar.scss'
import toolState from "../../../store/toolState";
import Brush from "../../../tools/Brush";
import Rect from "../../../tools/Rect";
import canvasState from "../../../store/canvasState";
import Circle from "../../../tools/Circle";
import Line from "../../../tools/Line";
import Eraser from "../../../tools/Eraser";
import Ellipse from "../../../tools/Ellipse";
import EllipseFill from "../../../tools/EllipseFill";
import RectFill from "../../../tools/RectFill";
import CircleFill from "../../../tools/CircleFill";
import {Toolbar} from "./ToolBar";


export type DataToolBarType = ButtonToolBarType[]
export type ButtonToolBarType = {
    id: number
    figure: Figure
    spriteIcon: string
    select?: boolean
}
export type Figure = | typeof Rect | typeof Circle | typeof Ellipse | typeof Brush
    | typeof Line | typeof Eraser | typeof RectFill | typeof CircleFill | typeof EllipseFill

export const ToolbarContainer = () => {


    const dataToolBarLeft: DataToolBarType = [
        {id: 1, figure: Brush, spriteIcon: '#brush'},
        {id: 2, figure: Rect, spriteIcon: '#rect'},
        {id: 3, figure: RectFill, spriteIcon: '#rectFill'},
        {id: 4, figure: Circle, spriteIcon: '#circle'},
        {id: 5, figure: CircleFill, spriteIcon: '#circleFill'},
        {id: 6, figure: Ellipse, spriteIcon: '#ellipse'},
        {id: 7, figure: EllipseFill, spriteIcon: '#ellipseFill'},
        {id: 8, figure: Line, spriteIcon: '#line'},
        {id: 9, figure: Eraser, spriteIcon: '#eraser'},
    ]

    const [toolBarButtons, setToolBarButtons] = useState<DataToolBarType>(dataToolBarLeft)

    const  selectButton = (id: number) => {
        const nextState = toolBarButtons.map(button => {
            button.select = false
            if (button.id === id) {
                return {...button, select: true};
            }
            return button;
        });
        setToolBarButtons(nextState);
    }

    const drawFigure = (figure: Figure, id: number) => {
        toolState.setTool(new figure(canvasState.canvas as HTMLCanvasElement))
        selectButton(id)
    }

    const changeColor = (e: string) => {
        toolState.setFillColor(e)
        toolState.setStrokeColor(e)
    }

    const undo = () => {
        canvasState.undo()
        console.log(canvasState.undo);
    }
    const redo = () => {
        canvasState.redo()

    }
    const save = () => {
        canvasState.undo()
    }

    console.log('RENDER')
    return (
        <Toolbar
            toolBarButtons={toolBarButtons}
            drawFigure={drawFigure}
            changeColor={changeColor}
            undo={undo}
            redo={redo}
            save={save}
        />
    );
}
