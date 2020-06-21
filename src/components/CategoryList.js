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
                        <li><a>For Sale:House & Apartment</a></li>
                        <li><a>For Rent:House & Apartment</a></li>
                        <li><a>Lands & Plots</a></li>
                        <li><a>For Rent:Shops & Offices</a></li>
                        <li><a>For Sale:Shops & Offices</a></li>
                        <li><a>PG & Guest Houses</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Cars</li>
                        <li><a>Cars</a></li>
                        <li><a>Commercial & other vehicles</a></li>
                        <li><a>Spare parts</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Furniture</li>
                        <li><a>Sofa & Dinning</a></li>
                        <li><a>Beds & Wardrobes</a></li>
                        <li><a>Home Decor & Garden</a></li>
                        <li><a>Kids Furniture</a></li>
                        <li><a>Other Household Items</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Jobs</li>
                        <li><a>Data entry & Back office</a></li>
                        <li><a>Sales & Marketing</a></li>
                        <li><a>Telecaller</a></li>
                        <li><a>Driver</a></li>
                        <li><a>Driver</a></li>
                        <li><a>Teacher</a></li>
                        <li><a>Cook</a></li>
                        <li><a>IT Enggineer & Developer</a></li>
                        <li><a>Accountant</a></li>
                        <li><a>Others</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Electronics & Appliances</li>
                        <li><a>TVs, Video - Audio</a></li>
                        <li><a>Household Appliances</a></li>
                        <li><a>Computers & Laptops</a></li>
                        <li><a>Cameras & Lenses</a></li>
                        <li><a>Games & Entertainment</a></li>
                        <li><a>Refrigerators</a></li>
                        <li><a>Computer Accessories</a></li>
                        <li><a>Hard Disks, Printers & Monitors</a></li>
                        <li><a>Air Conditions</a></li>
                        <li><a>Others</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Mobile</li>
                        <li><a>Mobile Phones</a></li>
                        <li><a>Accessories</a></li>
                        <li><a>Tablets</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Bikes</li>
                        <li><a>Motorcycles</a></li>
                        <li><a>Scooters</a></li>
                        <li><a>Spare parts</a></li>
                        <li><a>Bicycles</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Books, Sports & Hobbies</li>
                        <li><a>Books</a></li>
                        <li><a>Gyms & Fitness</a></li>
                        <li><a>Musical Instruments</a></li>
                        <li><a>Sports Equipment</a></li>
                        <li><a>Other Hobbies</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Fashion</li>
                        <li><a>Men</a></li>
                        <li><a>Women</a></li>
                        <li><a>Kids</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Pets</li>
                        <li><a>Fishes & Aquarium</a></li>
                        <li><a>Pet Foodd & Accessories</a></li>
                        <li><a>Dogs</a></li>
                        <li><a>Other Pets</a></li>
                    </ul>
                </div>
                <div className="cat-list">
                    <ul>
                        <li className="bold font-description">Services</li>
                        <li><a>Electronic & Computer</a></li>
                        <li><a>Education & Classes</a></li>
                        <li><a>Drivers & Taxi</a></li>
                        <li><a>Health & Beauty</a></li>
                        <li><a>Other Services</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CategoryList;