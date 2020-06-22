import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
class PopularCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        $('.popular-card-container').hover(function(){
            $(this).addClass('hover');
        },function(){
                $(this).removeClass('hover');

        });
        $('.top-menu .search-bar .search-input').fadeIn();
        // $('.popular-card-container').on('mouseout',function(){
        // });
    }
    render() {
        return (
            <div className="popular-card-container">
                <img src={this.props.src} alt="name"></img>
                <span className="popular-title">{this.props.title}</span>
                <span className="price-range">starting from Rs.{this.props.range}</span>
                <span className="btn-popular btn-primary"><Link to="/search-page">{this.props.btnText}</Link></span>
            </div>
        );
    }
}

export default PopularCard;