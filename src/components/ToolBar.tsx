import React, {useState} from 'react';
import '../styles/toolBar.scss'
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import canvasState from "../store/canvasState";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import Eraser from "../tools/Eraser";
import Ellipse from "../tools/Ellipse";
import sprite from "../assets/spriteIkon.svg"
import EllipseFill from "../tools/EllipseFill";
import RectFill from "../tools/RectFill";
import CircleFill from "../tools/CircleFill";

type PropsType = {};


type DataToolBarType = ButtonToolBarType[]
type ButtonToolBarType = {
    id: number
    className: string
    figure?: typeof Brush | typeof Rect | typeof Circle | typeof Ellipse | typeof Line | typeof Eraser
    spriteIcon: string
    action?: any
}

export const Toolbar = (props: PropsType) => {

    const [isActive, setIsActive] = useState(false)


    const drawFigure = (figure: any) => {
        toolState.setTool(new figure(canvasState.canvas))
        toolState.setActive(true)
    }
    const changeColor = (e: string) => {
        toolState.setFillColor(e)
        toolState.setStrokeColor(e)
    }

    let classOpt = `${toolState.isActive ? "toolBar btn selectTool" : "toolBar btn"}`

    const dataToolBarLeft: DataToolBarType = [
        {id: 1, className: '', figure: Brush, spriteIcon: '#brush'},
        {id: 2, className: '', figure: Rect, spriteIcon: '#rect'},
        {id: 3, className: '', figure: RectFill, spriteIcon: '#rectFill'},
        {id: 4, className: '', figure: Circle, spriteIcon: '#circle'},
        {id: 5, className: '', figure: CircleFill, spriteIcon: '#circleFill'},
        {id: 6, className: '', figure: Ellipse, spriteIcon: '#ellipse'},
        {id: 7, className: '', figure: EllipseFill, spriteIcon: '#ellipseFill'},
        {id: 8, className: '', figure: Line, spriteIcon: '#line'},
        {id: 9, className: '', figure: Eraser, spriteIcon: '#eraser'},
    ]


    return (
        <div className='toolBar'>
            <div className='container'>
                {
                    dataToolBarLeft.map(b => <button key={b.id} className={classOpt}
                                                     onClick={() => drawFigure(b.figure)}>
                        <div>
                            <svg className='icon'>
                                <use href={sprite + `${b.spriteIcon}`}/>
                            </svg>
                        </div>
                    </button>)
                }
                <input onChange={e => changeColor(e.target.value)} type="color" className='input-color'/>


                <button className='toolBar btn undo' onClick={() => canvasState.undo()}>
                    <svg className='icon'>
                        <use href={sprite + `#undo`}/>
                    </svg>
                </button>
                <button className='toolBar btn' onClick={() => canvasState.redo()}>
                    <svg className='icon'>
                        <use href={sprite + `#redo`}/>
                    </svg>
                </button>
                <button className='toolBar btn save' onClick={() => canvasState.redo()}>
                    <svg className='icon'>
                        <use href={sprite + `#save`}/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
