import React, { Component } from 'react';
import PopularCard from './PopularCard';
import Title from './Title';
class PopularItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="Popular-item-container flex-column">
                <div className="popular-item-title flex-row align-left">
                    <Title title="Popular Items"></Title>
                </div>
                <div className="popular-item-card flex-row justify-space-between">
                    <PopularCard src="./icons/watch.jpg" title="Smart watch" range="12,000" btnText="View all"></PopularCard>
                    <PopularCard src="./icons/headphones.jpg" title="Headphones" range="1200" btnText="View all"></PopularCard>
                    <PopularCard src="./icons/speaker.jpg" title="Speakers" range="1000" btnText="View all"></PopularCard>
                </div>
            </div>
        );
    }
}

export default PopularItems;