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
                    <CategoryCard src="./icons/smart-phone.svg" title="Smart Phone"></CategoryCard>
                    <CategoryCard src="./icons/computer.svg" title="Computer"></CategoryCard>
                    <CategoryCard src="./icons/games.svg" title="Games"></CategoryCard>
                    <CategoryCard src="./icons/smart-watch.svg" title="Smart Watch"></CategoryCard>
                    <CategoryCard src="./icons/shoes.svg" title="Shoes"></CategoryCard>
                    <CategoryCard src="./icons/clothes.svg" title="Clothes"></CategoryCard>
                </div>
            </div>
        );
    }
}

export default MostPopular;