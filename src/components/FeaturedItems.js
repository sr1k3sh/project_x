import React, { Component } from 'react';
import Title from './Title';
import FeaturedCard from './FeaturedCard';
class FeaturedItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="featured-item-container flex-column">
                <div className="featured-item-title flex-row align-left">
                    <Title title="Featured Items"></Title>
                </div>
                <div className="featured-item-card flex-row justify-space-between">
                    <FeaturedCard src="./icons/f1.png" price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f2.png" price="90,000" details="Iphone XR 256GB" location="Chitwan" date="Jun 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f3.png" price="50,000" details="Apple watch series 4" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f4.png" price="12,000" details="Pug " location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f1.png" price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f1.png" price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f1.png" price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f2.png" price="90,000" details="Iphone XR 256GB" location="Chitwan" date="Jun 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f3.png" price="50,000" details="Apple watch series 4" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f4.png" price="12,000" details="Pug " location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f1.png" price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                    <FeaturedCard src="./icons/f1.png" price="12,90,000" details="Fiat 500 Convertible Car Leases …" location="Baluwatar, KTM" date="Mar 18"></FeaturedCard>
                </div>
            </div>
        );
    }
}

export default FeaturedItems;