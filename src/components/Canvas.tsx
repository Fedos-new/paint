import React, {useEffect, useRef} from 'react';
import '../styles/canvas.scss'
import {observer} from "mobx-react-lite";
import canvasState from '../store/canvasState';
import toolState from "../store/toolState";
import Brush from "../tools/Brush";


export const Canvas = observer(() => {

    const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current as HTMLCanvasElement))
    }, [])

    const mouseHandler = () => {
        if (canvasRef.current != null) {
            canvasState.pushToUndo(canvasRef.current.toDataURL())
        }
    }

    return (
        <div className='canvas'>
            <canvas onMouseDown={() => mouseHandler()} ref={canvasRef} width={800} height={600}
                    style={{cursor: 'crosshair'}}/>
        </div>
    );
})
