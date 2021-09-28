import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="category flex-row justify-center align-center">
                <img src={this.props.src} alt="smart phone"></img>
                <span className="category-title font-title bold"><Link to='/search-page'>{this.props.title}</Link></span>
            </div>
        );
    }
}

export default CategoryCard;