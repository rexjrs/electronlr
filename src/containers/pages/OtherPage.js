import React, { Component } from 'react';

export default class OtherPage extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                Other Page
                <button onClick={()=>this.props.history.goBack()}></button>
            </div>
        );
    }
}
