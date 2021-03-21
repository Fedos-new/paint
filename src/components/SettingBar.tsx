import React from 'react';
import '../styles/toolBar.scss'
import toolState from "../store/toolState";

type PropsType = {};

export const SettingBar = (props: PropsType) => {

    return (
        <div className='settingBar'>
            <label htmlFor="line-width" style={{margin: '10px'}}>Толщина линии</label>
             1px
            <input
                style={{margin: '10px'}}
                id='line-width'
                type="range"
                defaultValue={1} min={1} max={50}
                onChange={e => toolState.setLineWidth(e.target.value)}
            />50px
        </div>
    );
}

