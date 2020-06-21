import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="footer flex-row justify-space-around">
                <div className="footer-1">
                    <ul>
                        <li className='footer-title'>Popular Categories</li>
                        <li className='footer-list'>Mobile Phones</li>
                        <li className='footer-list'>Electronics</li>
                        <li className='footer-list'>Computer</li>
                        <li className='footer-list'>Smart Watches</li>
                        <li className="view-all footer-list">View all</li>
                    </ul>
                </div>
                <div className="footer-2">
                    <ul>
                        <li className='footer-title'>Popular Location</li>
                        <li className='footer-list'>Kathmandu</li>
                        <li className='footer-list'>Chitwan</li>
                        <li className='footer-list'>Pokhara</li>
                        <li className='footer-list'>Butwal</li>
                        <li className="view-all footer-list">View all</li>
                    </ul>
                </div>
                <div className="footer-3">
                    <ul>
                        <li className='footer-title'>ProjectX</li>
                        <li className='footer-list'>Helo</li>
                        <li className='footer-list'>Contact Us</li>
                        <li className='footer-list'>Sitemap</li>
                        <li className='footer-list'>Legal & Privacy info</li>
                    </ul>
                </div>
                <div className="footer-4">
                    <ul>
                        <li className='footer-title'>Follow us</li>
                        <li className='footer-list'>FaceBook</li>
                        <li className='footer-list'>Instagram</li>      
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;