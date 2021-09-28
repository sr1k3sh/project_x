import React from 'react';
import { useHistory } from 'react-router-dom';
function FeaturedCard(props) {
        const history = useHistory();
        const  navigateDetail=()=>{
            history.push('/detail-page')
        };
        const descStyle={
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width:'250px'
        };
        return (
            <div id={props.id} className="featured-card-container" onClick={navigateDetail}>
                <img src={props.src} alt="images"></img>
        <span className={props.type?'product-type new':'product-type'}>{props.type?'new':'used'}</span>
                <div className="featured-card-details flex-column justify-space-around">
                    <div className="flex-row justify-space-between align-center">
                        <span className="font-title bold">Rs. {props.price}</span>
                        <img src="./icons/heart.png" alt="images"></img>
                    </div>
                    <div className="flex-row justify-space-between">
                        <span className="secondary-color font-description" style={descStyle}>{props.details}</span>
                    </div>
                    <div className="flex-row justify-space-between">
                        <span className="secondary-color font-subdescription">{props.location}</span>
                        <span className="secondary-color font-subdescription">{props.date}</span>
                    </div>
                </div>
            </div>
        );
}

export default FeaturedCard;