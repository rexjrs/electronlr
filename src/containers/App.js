import '../assets/css/App.css';
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
        ipcRenderer.on('upload-assets', (event) => {
            alert('yes this is real software')
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
