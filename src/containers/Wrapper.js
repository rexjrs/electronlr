import React, { Component } from 'react';
import TitleBar from '../components/TitleBar'
import SideBar from '../components/SideBar'
import { mockPanels } from '../config/Mock'

const Wrapper = (Page) => {
    return (
        class WrapperPage extends Component {
            constructor() {
                super()
                this.state = {
                    panels: mockPanels,
                    snippetViewing: {
                        panelId: null,
                        snippetId: null
                    }
                }
            }
            render() {
                const localProps = {
                    ...this.props,
                    panels: this.state.panels,
                    app: this,
                    snippetViewing: this.state.snippetViewing
                }
                return (
                    <div>
                        <SideBar {...localProps} />
                        <TitleBar />
                        <Page {...localProps} />
                    </div>
                )
            }
        }
    )
}

export default Wrapper