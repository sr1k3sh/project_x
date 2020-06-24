import React, { Component } from 'react';
import BreadCrumb from '../library/BreadCrumb';
const DetailPage = (props) => {
    return (
        <div className="detail-page flex-column">
            <BreadCrumb></BreadCrumb>
            <div className="flex-row">
                <div className="flex-column slider" style={{paddingRight:10}}>
                    <img src="./icons/bike.png"></img>
                    <div className="flex-row justify-space-between" style={{marginTop:'12px'}}>
                        <img src="./icons/bike1.png"></img>
                        <img src="./icons/bike2.png"></img>
                        <img src="./icons/bike3.png"></img>
                        <img src="./icons/bike4.png"></img>
                    </div>
                </div>
                <div className="flex-column details width-50" style={{paddingLeft:10}}>
                    <div className="flex-row justify-space-between align-center">
                        <span className="font-24 bold">Benelli TNT 150 Excellent condition</span>
                        <div className="flex-row" style={{fontSize:'20px'}}><span className="icon-share"></span><span className="icon-heart-empty"></span></div>
                    </div>
                    <div className="flex-row padding-24 border-bottom" style={{alignItems:'baseline'}}>
                        <span className="font-36 bold">Rs. 2,30,000</span>
                        <span className="font-18" style={{marginLeft:'7px'}}>(negotiable)</span>
                    </div>
                    <div className="flex-column product-info padding-24 border-bottom">
                        <div className="flex-row justify-space-between">
                            <span className="text-uppercase font-18 bold margin-bottom-18">product information</span>
                            <span>07 may,2020</span>
                        </div>
                        <div className="flex-row">
                            <div className="width-50 flex-row font-18 margin-bottom-14"><span className="width-40" style={{textAlign:'left'}}>Brand:</span><span className="bold">Beneli</span></div>
                            <div className="width-50 flex-row font-18 margin-bottom-14"><span className="width-40" style={{textAlign:'left'}}>Model:</span><span className="bold">TNT 150</span></div>
                            <div className="width-50 flex-row font-18 margin-bottom-14"><span className="width-40" style={{textAlign:'left'}}>Condition:</span><span className="bold">Used</span></div>
                            <div className="width-50 flex-row font-18 margin-bottom-14"><span className="width-40" style={{textAlign:'left'}}>km driven:</span><span className="bold">13,000 Km</span></div>
                            <div className="width-50 flex-row font-18 margin-bottom-14"><span className="width-40" style={{textAlign:'left'}}>Lot no:</span><span className="bold">44</span></div>
                            <div className="width-50 flex-row font-18 margin-bottom-14"><span className="width-40" style={{textAlign:'left'}}>Year:</span><span className="bold">2019</span></div>
                        </div>
                    </div>
                    <div className="flex-column seller-info padding-24 border-bottom">
                        <div className="flex-row">
                            <span className="font-36 bold flex-row justify-center align-center font-500" style={{background:'#44D7B6',width:70,height:70,borderRadius:'50%',color:'#fff'}}>R</span>
                            <div className="flex-column">
                                <div className="flex-row"><span>Rikesh shrestha</span><span>(24 ads)</span></div>
                                <span>Baluwatar, ktm</span>
                            </div>
                        </div>
                        <div>
                            <span>Contact Seller</span>
                        </div>
                    </div>
                    <div className="Description padding-24 border-bottom">
                        <span>Benelli TNT 150 mint in condition with all papers upto date</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;