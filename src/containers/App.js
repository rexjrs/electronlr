import '../assets/css/App.css';
import '../assets/css/icons/Icons.css'
import '../assets/css/codemirror.css'
import '../assets/css/monokai.css'
import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import OtherPage from './pages/OtherPage'
import { ipcRenderer } from 'electron';

class App extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        ipcRenderer.on('new-snippet', (event) => {

        });
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
