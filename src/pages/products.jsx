import React from 'react'; 
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Products from '../components/Products';



export default (props) => { 
   
    const products = props.data.allStripeProduct.nodes;

    return (
        <Layout>
            <Products products={products}/>
        </Layout>
    )
}

export const PageQuery = graphql`{
    allStripeProduct{
        nodes{
            id
            name
            slug
        
        }
    }
}`;