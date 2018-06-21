import React, { Component } from 'react';
import Wrapper from '../Wrapper'

class OtherPage extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="other-page">
                It's possible thanks to Electron + React. Possible plan for 2019?
                <button onClick={() => this.props.history.push('/')}>Back</button>
            </div>
        );
    }
}

export default Wrapper(OtherPage)