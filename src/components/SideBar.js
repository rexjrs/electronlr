import React, { Component } from 'react';
import Panel from './sidebar/Panel'
import '../assets/css/sidebar/Sidebar.css'

export default class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            whatIsDragging: 'none'
        }
        this.dragPositionEnd = null
        this.expandDespand = this.expandDespand.bind(this)
        this.draggingOverPanel = this.draggingOverPanel.bind(this)
        this.dragEnd = this.dragEnd.bind(this)
        this.thisIsDragging = this.thisIsDragging.bind(this)
    }
    thisIsDragging(type) {
        if (type !== this.state.whatIsDragging) {
            this.setState({
                whatIsDragging: type
            })
        }
    }
    draggingOverPanel(positionOver) {
        this.dragPositionEnd = positionOver
    }
    dragEnd(positionStart) {
        const panels = this.props.panels.map((item) => {
            if (item.position === positionStart) {
                return {
                    ...item,
                    position: this.dragPositionEnd
                }
            }
            if (item.position < this.dragPositionEnd) {
                return item
            } else {
                return {
                    ...item,
                    position: item.position + 1
                }
            }
        })
        this.props.app.setState({ panels: panels })
    }
    expandDespand(id) {
        const panels = this.props.panels.map((item) => {
            if (item.panelId === id) {
                return {
                    ...item,
                    expanded: !item.expanded
                }
            }
            return item
        })
        this.props.app.setState({
            panels: panels
        })
    }
    renderPanels() {
        const panels = this.props.panels.map((item, index) => {
            return (
                <Panel
                    app={this.props.app}
                    key={item.panelId}
                    id={item.panelId}
                    title={item.title}
                    expanded={item.expanded}
                    data={item.snippets}
                    expandDespand={this.expandDespand}
                    draggingOverPanel={this.draggingOverPanel}
                    dragEnd={this.dragEnd}
                    position={item.position}
                    snippetViewing={this.props.snippetViewing}
                    thisIsDragging={this.thisIsDragging}
                    whatIsDragging={this.state.whatIsDragging}
                />
            )
        })
        panels.sort((a, b) => {
            return a.props.position - b.props.position;
        })
        return panels
    }
    render() {
        return (
            <div className="sidebar">
                {this.renderPanels()}
            </div>
        )
    }
}
