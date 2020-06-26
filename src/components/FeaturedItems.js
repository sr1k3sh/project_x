import React, { Component } from 'react';
import Title from './Title';
import FeaturedCard from './FeaturedCard';
import gql from "graphql-tag";
import { ApolloProvider, Query } from 'react-apollo';
class FeaturedItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            
            <div className="featured-item-container flex-column">
                <div className="featured-item-title flex-row align-left">
                    <Title title="Featured Items"></Title>
                </div>
                <div className="featured-item-card flex-row justify-space-between">
                    <Query query={gql`
                            {
                                featureditems{
                                id
                                price
                                description
                                location
                                date
                                }
                            }
                        `}>
                        {({loading,error,data})=>{
                        if(loading) return <p>loading..</p>
                        if(error) return <p>erro loadgin</p>
                        return data.featureditems.map(({id,price,description,location,date})=>(
                            <FeaturedCard id={id} src="./icons/f1.png" type={true} price={price} details={description} location={location} date={date}></FeaturedCard>
                        ))
                        }}
                    </Query>
                    
                </div>
            </div>
        );
    }
}

export default FeaturedItems;