import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
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
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;