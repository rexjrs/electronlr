import '../assets/css/App.css';
import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import OtherPage from './pages/OtherPage'

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <Route exact path='/' render={(props) =>
                        <Home {...props} />
                    } />
                    <Route exact path='/no' render={(props) =>
                        <OtherPage {...props} />
                    } />
                </React.Fragment>
            </HashRouter>
        );
    }
}

export default App;
