import React, { Component } from 'react';
import './header.css';
import "./../fontello/css/fontello.css"
import $ from 'jquery'
import CategoryList from './CategoryList';
import {Link} from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        $('.bottom-menu .menus-more').on('click',function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active brand-color');
                $('.category-list-container').fadeOut();
            }
            else{
                $('.category-list-container').fadeIn({
                    start:function(){
                        $(this).css({
                            display:'flex'
                        })
                    }
                });
                $(this).addClass('active brand-color');
            }
        })
    }
    render() {
        return (
            <div className="header">
                <div className="header-title flex-row align-center justify-space-around">
                    <span className="brand-color bold font-14">Sell on Bechday</span>
                    <span className="bold font-14 divider">ENGLISH</span>
                    <span className="font-14">NEPALI</span>
                </div>
                <div className="top-menu flex-row align-center justify-space-around">
                    <div className="top-left-menu flex-row align-center justify-space-between">
                        <div className="menu-logo">
                            <h2><Link to='/'>Bechdey.</Link></h2>
                        </div>
                        <div className="search-bar flex-row align-center">
                            <div className="search-input flex-row align-center">
                                <input className="search" placeholder="search for anything"></input>
                                <span className="icon-search"></span>
                            </div>
                            {/* <span class="adv-search">Advance search</span> */}
                        </div>
                    </div>
                    <div className="top-right-menu flex-row justify-space-around align-center font-24">
                        <span className="icon-heart-empty"></span>
                        <span className="icon-icon---cart"></span>
                        <span className="icon-icon---profile"></span>
                    </div>
                </div>
                <div className="bottom-menu flex-row justify-space-around">
                    <span className="menus">Cars</span>
                    <span className="menus">Motorcycle</span>
                    <span className="menus">Mobile Phones</span>
                    <span className="menus">Home & Apartments</span>
                    <span className="menus">Scooters</span>
                    <span className="menus">Clothes</span>
                    <span className="menus">Mobile accessories</span>
                    <span className="menus menus-more">All Categories<span className="icon-down-dir"></span></span>
                </div>
                <CategoryList></CategoryList>
            </div>
        );
    }
}

export default Header;