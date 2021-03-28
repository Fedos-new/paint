import React from 'react';
import './styles/app.scss';
import {SettingBar} from "./components/Toolbars/SettingBar";
import {Canvas} from "./components/Canvas";
import {ToolbarContainer} from "./components/Toolbars/ToolBar/ToolBarContainer";

function App() {
    return (
        <div className="app">
            <ToolbarContainer/>
            <div className="line"/>
            <SettingBar/>
            <Canvas/>

        </div>
    );
}

export default App;
