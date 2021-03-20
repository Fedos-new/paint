import React from 'react';
import '../styles/toolBar.scss'

type PropsType = {};

export const Toolbar = (props: PropsType) => {
    return (
        <div className='toolBar'>
            <button className='toolBar__btn brush'/>
            <button className='toolBar__btn rect'/>
            <button className='toolBar__btn circle'/>
            <button className='toolBar__btn eraser'/>
            <input type="color" style={{marginLeft: '16px'}}/>
            <button className='toolBar__btn undo'/>
            <button className='toolBar__btn redo'/>
            <button className='toolBar__btn save'/>

        </div>
    );
}
