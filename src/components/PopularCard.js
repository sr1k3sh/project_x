import React, { Component, Fragment } from 'react';
import $ from 'jquery'
class PopularCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        $('.popular-card-container').hover(function(){
            $(this).addClass('hover');
            $(this).find('.btn-popular').show();
        },function(){
                $(this).removeClass('hover');
                $(this).find('.btn-popular').hide();

        });
        // $('.popular-card-container').on('mouseout',function(){
        // });
    }
    render() {
        return (
            <div className="popular-card-container">
                <img src={this.props.src} alt="name"></img>
                <span className="popular-title">{this.props.title}</span>
                <span className="price-range">starting from Rs.{this.props.range}</span>
                <span className="btn-popular btn-primary">{this.props.btnText}</span>
            </div>
        );
    }
}

export default PopularCard;