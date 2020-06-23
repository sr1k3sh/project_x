import React, { Component } from 'react';
import './search.css';
import FeaturedCard from '../components/FeaturedCard';
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
                            <span className="font-description" style={{textAlign:'left',marginBottom:'14px'}}>All categories</span>
                            <ul className="font-description">
                                <li style={{marginLeft:"-20px"}} className="margin-bottom-14">Bikes</li>
                                <ul>
                                    <li className="margin-bottom-14">Motorcycle (1280)</li>
                                    <li className="margin-bottom-14">Scooters (4890)</li>
                                    <li className="margin-bottom-14">Spare-parts (35000)</li>
                                    <li className="margin-bottom-14">Bicycle (8502)</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="search-categories">
                        <div className="title flex-row justify-space-around font-description"><span className="bold">LOCATIONS</span><span className="icon-up-open"></span></div>
                        <div className="cat-list flex-column">
                            <span className="font-description" style={{textAlign:'left',marginBottom:'14px'}}>Nepal</span>
                            <ul className="font-description">
                                <li style={{marginLeft:"-20px"}} className="margin-bottom-14">Kathmandu (8902)</li>
                                <ul>
                                    <li className="margin-bottom-14">Chitwan (8902)</li>
                                    <li className="margin-bottom-14">Pokhara (8902)</li>
                                    <li className="margin-bottom-14">Butwal (8902)</li>
                                    <li className="margin-bottom-14 brand-color">view more</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="search-categories">
                        <div className="title flex-row justify-space-around font-description"><span className="bold">BRAND AND MODEL</span><span className="icon-up-open"></span></div>
                        <div className="cat-list flex-column">
                            <span className="font-description" style={{textAlign:'left',marginBottom:'14px'}}>Nepal</span>
                            <ul className="font-description">
                                <ul>
                                    <li className="margin-bottom-14">Honda (234)</li>
                                    <li className="margin-bottom-14">Royal Enfield (8902)</li>
                                    <li className="margin-bottom-14">Bajaj (8902)</li>
                                    <li className="margin-bottom-14">Yamaha (8902)</li>
                                    <li className="margin-bottom-14">Suzuki (8902)</li>
                                    <li className="margin-bottom-14 brand-color">view more</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-column search-right">
                    <div className="search-right-filters flex-row align-center">
                        <span className="font-description bold">Filters:</span>
                        <div className="filter-list flex-row">
                            <div className="filter-item flex-row justify-space-between align-center">
                                <span className="font-14">Motorcycles</span><span className="icon-cancel"></span>
                            </div>
                            <div className="filter-item flex-row justify-space-between align-center">
                                <span className="font-14">Kathmnadu</span><span className="icon-cancel"></span>
                            </div>
                        </div>
                    </div>
                    <div className="search-right-results flex-column justify-space-between">
                        <div className="result-title flex-row justify-space-between">
                            <div className="total-results">
                                <span>1289 Motorcycle found</span>
                            </div>
                            <div className="sort-div flex-row">
                                <span className="font-description bold">SORt BY:</span>
                                <div className="sorting font-description">
                                    <span>Popular Items</span>
                                    <span className='icon-down-open'></span>
                                </div>
                            </div>
                        </div>
                        <div className="result-found flex-row justify-space-between">
                            <FeaturedCard src="./icons/f1.png" type={true} price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f2.png" price="90,000" details="Iphone XR 256GB" location="Chitwan" date="Jun 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f3.png" price="50,000" details="Apple watch series 4" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f4.png" price="12,000" details="Pug " location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f1.png" price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f1.png" type={true} price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f1.png" type={true} price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f2.png" price="90,000" details="Iphone XR 256GB" location="Chitwan" date="Jun 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f3.png" price="50,000" details="Apple watch series 4" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f4.png" price="12,000" details="Pug " location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f1.png" price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                            <FeaturedCard src="./icons/f1.png" price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searchpage;