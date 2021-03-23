import React, {ChangeEvent, useState} from 'react';
import '../styles/toolBar.scss'
import toolState from "../store/toolState";

type PropsType = {};

export const SettingBar = (props: PropsType) => {

    const [value, setValue] = useState(1);

    const onChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
        toolState.setLineWidth(e.target.value)
        setValue(+e.target.value)
    }

    return (

            <div className='settingBar'>
                <div className='container'>
                <label htmlFor="line-width" className="line-width">Толщина линии</label>
                <div className='line-width-value'>{value}px</div>
                <input
                    className='input-range'
                    id='line-width'
                    type="range"
                    defaultValue={1} min={1} max={50}
                    onChange={onChangeRange}
                />
                <label htmlFor="color-cover" className="color-cover">Цвет обводки</label>
                <input
                    className='input-color'
                    id='color-cover'
                    onChange={e => toolState.setStrokeColor(e.target.value)}
                    type="color"
                />
            </div>
        </div>
    );
}

