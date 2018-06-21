import React, { Component } from 'react';

export default class Home extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                Home
                <button onClick={()=>this.props.history.push('/no')}></button>
            </div>
        );
    }
}
