import React, { Component } from 'react';
import Wrapper from '../Wrapper'

class OtherPage extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="other-page">

            </div>
        );
    }
}

export default Wrapper(OtherPage)