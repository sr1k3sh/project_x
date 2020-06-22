import React, { Component } from 'react';
import './search.css';
class Searchpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="search-page flex-row justify-space-between">
                <div className="flex-column search-left">
                    <div className="search-title flex-column">
                        <span className="font-subdescription">Home/Bikes/Motorcycle</span>
                        <h2>MOTORCYCLE</h2>
                    </div>
                    <div className="search-categories">
                        <div className="title flex-row justify-space-around font-description"><span className="bold">CATAGORIES</span><span className="icon-up-open"></span></div>
                        <div className="cat-list flex-column">
                            <span className="font-description" style={{textAlign:'left'}}>All categories</span>
                            <ul className="font-description">
                                <li style={{marginLeft:"-20px"}}>Bikes</li>
                                <ul>
                                    <li>Motorcycle (1280)</li>
                                    <li>Scooters (4890)</li>
                                    <li>Spare-parts (35000)</li>
                                    <li>Bicycle (8502)</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="search-categories">
                        <div className="title flex-row justify-space-around font-description"><span className="bold">LOCATIONS</span><span className="icon-up-open"></span></div>
                        <div className="cat-list flex-column">
                            <span className="font-description" style={{textAlign:'left'}}>Nepal</span>
                            <ul className="font-description">
                                <li style={{marginLeft:"-20px"}}>Kathmandu (8902)</li>
                                <ul>
                                    <li>Chitwan (8902)</li>
                                    <li>Pokhara (8902)</li>
                                    <li>Butwal (8902)</li>
                                    <li>Bicycle (8502)</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-column search-right"></div>
            </div>
        );
    }
}

export default Searchpage;