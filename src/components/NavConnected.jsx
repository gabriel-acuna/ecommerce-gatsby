import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';


const Nav = (props) => {
    console.log(props);
    
    return (
        <Navigation shopping_cart={props.shoppingCart}/>
    )
}


const mapStateToProps = ( state ) => state;
export default connect(mapStateToProps)(Nav);