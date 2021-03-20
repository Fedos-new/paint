import React from 'react';
import '../styles/canvas.scss'
import {observer} from "mobx-react-lite";


type PropsType = {};

export const Canvas = observer((props: PropsType) => {
    return (
        <div className='canvas'>
            <canvas width={600} height={400}/>
        </div>
    );
})
