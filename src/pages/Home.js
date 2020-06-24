import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainPage from './MainPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Searchpage from './Searchpage';
import DetailPage from './DetailPage';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='main-page'>
                <Router>
                    <Header></Header>
                        <Switch>
                            <Route path='/search-page'>
                                <Searchpage></Searchpage>
                            </Route>
                            <Route path="/detail-page">
                                <DetailPage title="test"></DetailPage>
                            </Route>
                            <Route path='/'>
                                <MainPage></MainPage>
                            </Route>
                        </Switch>
                    <Footer></Footer>
                </Router>
            </div>
        );
    }
}

export default Home;