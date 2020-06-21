import React, { Component } from 'react';
import './banner.css'
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="banner flex-row">
                <ul className="banner-list">
                    <li>
                        <img width="100%" src="./icons/Rectangle.png" alt="banner1"></img>
                        <span className="banner-title">Selling here is the easy way to make extra money.</span>
                        <div className="flex-row justify-space-between align-center button-area">
                            <span className="banner-btn">Register for free</span>
                            <span className="Learn More">Learn More</span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Banner;