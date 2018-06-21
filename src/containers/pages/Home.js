import React, { Component } from 'react';
import Wrapper from '../Wrapper'

class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="home-page">
                <p>Imagine if Lightrocket's Dashboard came as REAL software</p>
                <button onClick={() => this.props.history.push('/no')}>Read more...</button>
            </div>
        );
    }
}

export default Wrapper(Home)