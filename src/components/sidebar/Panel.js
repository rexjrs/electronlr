import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

export default class Panel extends Component {
    constructor() {
        super()
        this.state = {
            dropZone: false
        }
        this.ctxMenuPanel = this.ctxMenuPanel.bind(this)
        this.ctxMenuSnippet = this.ctxMenuSnippet.bind(this)
    }
    ctxMenuPanel(e) {
        ipcRenderer.send('ctx-panel', e.pageX, e.pageY)
    }
    ctxMenuSnippet(e) {
        ipcRenderer.send('ctx-snippet', e.pageX, e.pageY)
    }
    renderSnippet() {
        const viewSnippet = (e, snippetId) => {
            e.stopPropagation()
            this.props.app.setState({ snippetViewing: { panelId: this.props.id, snippetId: snippetId } })
        }
        return this.props.data.map(((item, index) => {
            return (
                <div
                    onClick={(e) => viewSnippet(e, item.snippetId)}
                    onContextMenu={this.ctxMenuSnippet}
                    key={item.snippetId}
                    className={`sidebar-panel-snippet-container ${this.props.snippetViewing.snippetId === item.snippetId ? 'active' : ''}`}>
                    <i className={`icon ${item.icon} snippet-icon`}></i>
                    <p>{item.title}</p>
                </div>
            )
        }))
    }
    render() {
        return (
            <div onClick={() => this.props.expandDespand(this.props.id)} className="sidebar-panel">
                <div className="sidebar-panel-drop" style={{ backgroundColor: this.state.dropZone ? 'rgb(159, 159, 159)' : 'transparent' }}></div>
                <div
                    onDragEnd={() => {
                        this.props.dragEnd(this.props.position)
                    }}
                    onDragLeave={() => {
                        if (this.state.dropZone) {
                            // this.props.draggingOverPanel(null)
                            this.setState({ dropZone: false })
                        }
                    }}
                    onDragOver={() => {
                        if (!this.state.dropZone) {
                            this.props.draggingOverPanel(this.props.position)
                            this.setState({ dropZone: true })
                        }
                    }}
                    draggable={true}
                    onContextMenu={this.ctxMenuPanel}
                    className="sidebar-panel-header">
                    <p>{this.props.title}</p>
                </div>
                <div
                    style={{ height: this.props.expanded ? (this.props.data.length * 24) + 5 : 0 }}
                    className="sidebar-panel-snippets">
                    {this.renderSnippet()}
                </div>
            </div>
        )
    }
}
