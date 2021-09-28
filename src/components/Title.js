import React, { Component } from 'react';
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <span className="component-title">{this.props.title}</span>
        );
    }
}

export default Title;