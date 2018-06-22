import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

export default class TitleBar extends Component {
    render() {
        return (
            <div onDoubleClick={() => {
                ipcRenderer.send('maxminwindow')
            }} className="title-bar">
                <p>SnippetRepo</p>
            </div>
        )
    }
}
