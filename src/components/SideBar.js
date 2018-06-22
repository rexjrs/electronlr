import React, { Component } from 'react';
import { mockPanels } from '../config/Mock'
import Panel from './sidebar/Panel'
import '../assets/css/sidebar/Sidebar.css'

export default class SideBar extends Component {
    constructor() {
        super()
        this.state = {
            panels: mockPanels,
        }
        this.dragPositionEnd = null
        this.expandDespand = this.expandDespand.bind(this)
        this.draggingOverPanel = this.draggingOverPanel.bind(this)
        this.dragEnd = this.dragEnd.bind(this)
    }
    draggingOverPanel(positionOver) {
        this.dragPositionEnd = positionOver
    }
    dragEnd(positionStart) {
        const panels = this.state.panels.map((item) => {
            if (item.position === positionStart) {
                return {
                    ...item,
                    position: this.dragPositionEnd
                }
            }
            if (item.position < this.dragPositionEnd) {
                return item
            }else{
                return {
                    ...item,
                    position: item.position+1
                }
            }
        })
        this.setState({ panels: panels })
    }
    expandDespand(id) {
        const panels = this.state.panels.map((item) => {
            if (item.panelId === id) {
                return {
                    ...item,
                    expanded: !item.expanded
                }
            }
            return item
        })
        this.setState({
            panels: panels
        })
    }
    renderPanels() {
        const panels = this.state.panels.map((item, index) => {
            return (
                <Panel
                    key={item.panelId}
                    id={item.panelId}
                    title={item.title}
                    expanded={item.expanded}
                    data={item.snippets}
                    expandDespand={this.expandDespand}
                    draggingOverPanel={this.draggingOverPanel}
                    dragEnd={this.dragEnd}
                    position={item.position}
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
