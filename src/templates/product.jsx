import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Product from '../components/Product';


export default (props) => {

    const product = props.data.stripeProduct;
    const skus = props.data.allStripeSku.nodes;

    return (
        <Layout>
            <Product product={product} skus={skus} />
        </Layout>
    )
}

export const pageQuery = graphql`
    query($id: String){
        stripeProduct( id: { eq: $id } ){
            name
            slug
        }
        allStripeSku(filter: { product: { id: { eq: $id } } } ){
            nodes{
              id
              image
              attributes{
                name
              }
              price
              currency
              created
            }
          }
    }
`;