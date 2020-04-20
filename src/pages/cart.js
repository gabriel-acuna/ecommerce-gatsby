import React from 'react';
import Layout from '../components/Layout';
import ShoppingCart from '../components/ShoppingCart';
import { useSelector, shallowEqual } from 'react-redux';


export default (props) => {
    const shoppingCart = useSelector((state) => state.shoppingCart, shallowEqual);
    return (
        <Layout>
            <ShoppingCart shoppingCart={shoppingCart} />
        </Layout>
    )
}