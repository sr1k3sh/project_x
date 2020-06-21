import React, { Component } from 'react';
class FeaturedCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="featured-card-container">
                <img src={this.props.src} alt="images"></img>
        <span className="product-type">{this.props.type?'new':'used'}</span>
                <div className="featured-card-details flex-column justify-space-around">
                    <div className="flex-row justify-space-between align-center">
                        <span className="font-title bold">Rs. {this.props.price}</span>
                        <img src="./icons/heart.png" alt="images"></img>
                    </div>
                    <div className="flex-row justify-space-between">
                        <span className="secondary-color font-description">{this.props.details}</span>
                    </div>
                    <div className="flex-row justify-space-between">
                        <span className="secondary-color font-subdescription">{this.props.location}</span>
                        <span className="secondary-color font-subdescription">{this.props.date}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedCard;