import React, {useEffect, useRef} from 'react';
import '../styles/canvas.scss'
import {observer} from "mobx-react-lite";
import canvasState from '../store/canvasState';
import toolState from "../store/toolState";
import Brush from "../tools/Brush";


type PropsType = {};

export const Canvas = observer((props: PropsType) => {

    const canvasRef:any = useRef()

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    },[])

    const mouseHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    return (
        <div className='canvas'>
            <canvas onMouseDown={() => mouseHandler()}  ref={canvasRef} width={600} height={400}/>
        </div>
    );
})
