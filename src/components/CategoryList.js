import React, { Component } from 'react';
class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="category-list-container flex-column justify-space-between">
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Properties</li>
                        <li><a href="#/">For Sale:House & Apartment</a></li>
                        <li><a href="#/">For Rent:House & Apartment</a></li>
                        <li><a href="#/">Lands & Plots</a></li>
                        <li><a href="#/">For Rent:Shops & Offices</a></li>
                        <li><a href="#/">For Sale:Shops & Offices</a></li>
                        <li><a href="#/">PG & Guest Houses</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Cars</li>
                        <li><a href="#/">Cars</a></li>
                        <li><a href="#/">Commercial & other vehicles</a></li>
                        <li><a href="#/">Spare parts</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Furniture</li>
                        <li><a href="#/">Sofa & Dinning</a></li>
                        <li><a href="#/">Beds & Wardrobes</a></li>
                        <li><a href="#/">Home Decor & Garden</a></li>
                        <li><a href="#/">Kids Furniture</a></li>
                        <li><a href="#/">Other Household Items</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Jobs</li>
                        <li><a href="#/">Data entry & Back office</a></li>
                        <li><a href="#/">Sales & Marketing</a></li>
                        <li><a href="#/">Telecaller</a></li>
                        <li><a href="#/">Driver</a></li>
                        <li><a href="#/">Driver</a></li>
                        <li><a href="#/">Teacher</a></li>
                        <li><a href="#/">Cook</a></li>
                        <li><a href="#/">IT Enggineer & Developer</a></li>
                        <li><a href="#/">Accountant</a></li>
                        <li><a href="#/">Others</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Electronics & Appliances</li>
                        <li><a href="#/">TVs, Video - Audio</a></li>
                        <li><a href="#/">Household Appliances</a></li>
                        <li><a href="#/">Computers & Laptops</a></li>
                        <li><a href="#/">Cameras & Lenses</a></li>
                        <li><a href="#/">Games & Entertainment</a></li>
                        <li><a href="#/">Refrigerators</a></li>
                        <li><a href="#/">Computer Accessories</a></li>
                        <li><a href="#/">Hard Disks, Printers & Monitors</a></li>
                        <li><a href="#/">Air Conditions</a></li>
                        <li><a href="#/">Others</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Mobile</li>
                        <li><a href="#/">Mobile Phones</a></li>
                        <li><a href="#/">Accessories</a></li>
                        <li><a href="#/">Tablets</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Bikes</li>
                        <li><a href="#/">Motorcycles</a></li>
                        <li><a href="#/">Scooters</a></li>
                        <li><a href="#/">Spare parts</a></li>
                        <li><a href="#/">Bicycles</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Books, Sports & Hobbies</li>
                        <li><a href="#/">Books</a></li>
                        <li><a href="#/">Gyms & Fitness</a></li>
                        <li><a href="#/">Musical Instruments</a></li>
                        <li><a href="#/">Sports Equipment</a></li>
                        <li><a href="#/">Other Hobbies</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Fashion</li>
                        <li><a href="#/">Men</a></li>
                        <li><a href="#/">Women</a></li>
                        <li><a href="#/">Kids</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Pets</li>
                        <li><a href="#/">Fishes & Aquarium</a></li>
                        <li><a href="#/">Pet Foodd & Accessories</a></li>
                        <li><a href="#/">Dogs</a></li>
                        <li><a href="#/">Other Pets</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Services</li>
                        <li><a href="#/">Electronic & Computer</a></li>
                        <li><a href="#/">Education & Classes</a></li>
                        <li><a href="#/">Drivers & Taxi</a></li>
                        <li><a href="#/">Health & Beauty</a></li>
                        <li><a href="#/">Other Services</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CategoryList;