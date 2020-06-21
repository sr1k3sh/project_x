import React, { Component } from 'react';
import './header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="header">
                <div className="top-menu flex-row align-center justify-space-around">
                    <div className="top-left-menu flex-row align-center justify-space-around">
                        <div className="menu-logo">
                            <h2>ProjectX</h2>
                        </div>
                        <div className="search-bar flex-row align-center">
                            <input className="search" placeholder="search for anything"></input>
                            <span class="adv-search">Advance search</span>
                        </div>
                    </div>
                    <div className="top-right-menu flex-row justify-space-around align-center">
                        <span>Sell</span>
                        <img src="./icons/heart.png" alt='heart'/>
                        <img src="./icons/Shape.png" alt="shape"/>
                        <img src="./icons/Avatar_Initials.png" alt="avatar"/>
                    </div>
                </div>
                <div className="bottom-menu flex-row justify-space-around">
                    <span className="menus">Fashion</span>
                    <span className="menus">Electronic</span>
                    <span className="menus">Home & Garden</span>
                    <span className="menus">Jewelery</span>
                    <span className="menus">Books,Film & Music</span>
                    <span className="menus">Art</span>
                    <span className="menus">Sports</span>
                    <span className="menus">Phones</span>
                    <span className="menus">More</span>
                </div>
            </div>
        );
    }
}

export default Header;