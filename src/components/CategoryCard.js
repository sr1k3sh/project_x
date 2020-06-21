import React, { Component } from 'react';
class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div class="category flex-row justify-center align-center">
                <img src={this.props.src} alt="smart phone"></img>
            </div>
        );
    }
}

export default CategoryCard;