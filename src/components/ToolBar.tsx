import React from 'react';
import '../styles/toolBar.scss'
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import canvasState from "../store/canvasState";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import Eraser from "../tools/Eraser";

type PropsType = {};

export const Toolbar = (props: PropsType) => {

    const brushDraw = () => {
        toolState.setTool(new Brush(canvasState.canvas))
    }
    const rectDraw = () => {
        toolState.setTool(new Rect(canvasState.canvas))
    }
    const circle = () => {
        toolState.setTool(new Circle(canvasState.canvas))
    }
    const line = () => {
        toolState.setTool(new Line (canvasState.canvas))
    }
    const eraser = () => {
        toolState.setTool(new Eraser (canvasState.canvas))
    }

    const changeColor = (e: string) =>  {
        toolState.setFillColor(e)
        toolState.setStrokeColor(e)
    }



    return (
        <div className='toolBar'>
            <button className='toolBar__btn brush' onClick={brushDraw}/>
            <button className='toolBar__btn rect' onClick={rectDraw}/>
            <button className='toolBar__btn circle' onClick={circle}/>
            <button className='toolBar__btn line' onClick={line}/>
            <button className='toolBar__btn eraser' onClick={eraser}/>
            <input onChange={e => changeColor(e.target.value)} type="color" style={{marginLeft: '16px',width: '30px'}}/>
            <button className='toolBar__btn undo' onClick={()=> canvasState.undo()}/>
            <button className='toolBar__btn redo' onClick={()=> canvasState.redo()}/>
            <button className='toolBar__btn save'/>
        </div>
    );
}
