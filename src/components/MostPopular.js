import React, { Component } from 'react';
import Title from './Title';
import CategoryCard from './CategoryCard';
class MostPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='most-popular-container flex-column'>
                <div className="most-popular-title flex-row align-left">
                    <Title title="Most Popular Categories"></Title>
                </div>
                <div className="most-poular-card flex-row justify-space-between">
                    <CategoryCard src="./icons/smart-phone.svg"></CategoryCard>
                    <CategoryCard src="./icons/computer.svg"></CategoryCard>
                    <CategoryCard src="./icons/games.svg"></CategoryCard>
                    <CategoryCard src="./icons/smart-watch.svg"></CategoryCard>
                    <CategoryCard src="./icons/shoes.svg"></CategoryCard>
                    <CategoryCard src="./icons/clothes.svg"></CategoryCard>
                </div>
            </div>
        );
    }
}

export default MostPopular;