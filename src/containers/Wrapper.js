import React, { Component } from 'react';
import TitleBar from '../components/TitleBar'
import SideBar from '../components/SideBar'
const Wrapper = (Page) => {
    return (
        class WrapperPage extends Component {
            render() {
                return (
                    <div>
                        <SideBar {...this.props} />
                        <TitleBar />
                        <Page {...this.props} />
                    </div>
                )
            }
        }
    )
}

export default Wrapper