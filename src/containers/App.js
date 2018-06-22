import '../assets/css/App.css';
import '../assets/css/icons/Icons.css'
import '../assets/css/codemirror.css'
import '../assets/css/monokai.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/css/css'
import 'codemirror/mode/dart/dart'
import 'codemirror/mode/django/django'
import 'codemirror/mode/elm/elm'
import 'codemirror/mode/go/go'
import 'codemirror/mode/livescript/livescript'
import 'codemirror/mode/lua/lua'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/nginx/nginx'
import 'codemirror/mode/php/php'
import 'codemirror/mode/ruby/ruby'
import 'codemirror/mode/sass/sass'
import 'codemirror/mode/rust/rust'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/yaml/yaml'
import 'codemirror/mode/swift/swift'
import 'codemirror/mode/perl/perl'
import 'codemirror/mode/clike/clike'
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
