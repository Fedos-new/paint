import React from 'react';
import '../../../styles/toolBar.scss'
import sprite from "../../../assets/spriteIkon.svg"
import {DataToolBarType, Figure} from './ToolBarContainer';

type PropsType = {
    toolBarButtons: DataToolBarType
    drawFigure: (figure: Figure, id: number) => void
    changeColor: (e: string) => void
    undo: () => void
    redo: () => void
    save: () => void
};


export const Toolbar = (props: PropsType) => {

    const {toolBarButtons, drawFigure, changeColor, undo, redo, save} = props

    return (
        <div className='toolBar'>
            <div className='container'>
                {
                    toolBarButtons.map((b) => <button
                        key={b.id}
                        onClick={() => drawFigure(b.figure, b.id)}
                        className={`${b.select ? 'toolBar btn selectTool' : 'toolBar btn'}`}>
                        <div>
                            <svg className='icon'>
                                <use href={sprite + `${b.spriteIcon}`}/>
                            </svg>
                        </div>
                    </button>)
                }
                <input onChange={e => changeColor(e.target.value)} type="color" className='input-color'/>

                <button className='toolBar btn undo' onClick={undo}>
                    <svg className='icon'>
                        <use href={sprite + `#undo`}/>
                    </svg>
                </button>
                <button className='toolBar btn redo' onClick={redo}>
                    <svg className='icon'>
                        <use href={sprite + `#redo`}/>
                    </svg>
                </button>
                <button className='toolBar btn save' onClick={save}>
                    <svg className='icon'>
                        <use href={sprite + `#save`}/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
