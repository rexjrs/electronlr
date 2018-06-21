import React, { Component } from 'react';

const Wrapper = (Page) => {
    return (
        class WrapperPage extends Component {
            render() {
                return (
                    <div>
                        <Page {...this.props} />
                    </div>
                )
            }
        }
    )
}

export default Wrapper