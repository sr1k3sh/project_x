import React, { Component, Fragment } from 'react';
import Banner from '../components/Banner';
import MostPopular from '../components/MostPopular';
import PopularItems from '../components/PopularItems';
import FeaturedItems from '../components/FeaturedItems';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>
                <Banner></Banner>
                <MostPopular></MostPopular>
                <PopularItems></PopularItems>
                <FeaturedItems></FeaturedItems>
            </Fragment>
        );
    }
}

export default MainPage;