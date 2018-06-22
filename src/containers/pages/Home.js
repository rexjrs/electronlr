import React, { Component } from 'react';
import Mousetrap from 'mousetrap'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { clipboard } from 'electron'
import Wrapper from '../Wrapper'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            editing: false,
            selectedSnippet: {

            }
        }
    }
    componentDidMount() {
        Mousetrap.prototype.stopCallback = () => {
            return false
        }
        Mousetrap(document.getElementById('code-block')).bind(['command+c', 'ctrl+c'], () => {
            const selection = window.getSelection().toString()
            if (selection !== '') {
                clipboard.writeText(selection)
            }
            return false
        });
        Mousetrap(document.getElementById('code-block')).bind(['command+v', 'ctrl+v'], () => {
            document.execCommand('paste')
            return false
        });
    }
    componentWillReceiveProps(nextProps) {
        let selectedSnippet
        if (nextProps.snippetViewing.panelId !== null && nextProps.snippetViewing.snippetId !== null) {
            for (let e in nextProps.panels) {
                if (nextProps.panels[e].panelId === nextProps.snippetViewing.panelId) {
                    for (let i in nextProps.panels[e].snippets) {
                        if (nextProps.panels[nextProps.snippetViewing.panelId].snippets[i].snippetId === nextProps.snippetViewing.snippetId) {
                            selectedSnippet = nextProps.panels[nextProps.snippetViewing.panelId].snippets[i]
                        }
                    }
                }
            }
        }
        this.setState({
            selectedSnippet: selectedSnippet
        })
    }
    render() {
        return (
            <div className="home-page">
                {this.state.selectedSnippet && this.state.selectedSnippet.code &&
                    <CodeMirror
                        id="code-block"
                        onBlur={() => {
                            const newPanels = this.props.panels.map((panel) => {
                                if (panel.panelId === this.props.snippetViewing.panelId) {
                                    return {
                                        ...panel,
                                        snippets: panel.snippets.map((snippet) => {
                                            if (snippet.snippetId === this.props.snippetViewing.snippetId) {
                                                return {
                                                    ...snippet,
                                                    code: this.state.selectedSnippet.code
                                                }
                                            }
                                            return snippet
                                        })
                                    }
                                }
                                return panel
                            })
                            this.props.app.setState({ panels: newPanels })
                        }}
                        className="code-block"
                        value={this.state.selectedSnippet.code}
                        options={{
                            mode: this.state.selectedSnippet.language,
                            lineNumbers: true,
                            indentUnit: 4,
                            theme: 'one-dark'
                        }}
                        onBeforeChange={(editor, data, value) => {
                            this.setState({
                                selectedSnippet: {
                                    ...this.state.selectedSnippet,
                                    code: value
                                }
                            });
                        }}
                    />
                }
            </div>
        );
    }
}

export default Wrapper(Home)