import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MostPopular from '../components/MostPopular';
import PopularItems from '../components/PopularItems';
import FeaturedItems from '../components/FeaturedItems';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='main-page'>
                <Header></Header>
                    <Banner></Banner>
                    <MostPopular></MostPopular>
                    <PopularItems></PopularItems>
                    <FeaturedItems></FeaturedItems>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;