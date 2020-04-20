import React from 'react';
import { Link } from 'gatsby';
import { IoMdCart } from 'react-icons/io';
import Icon from './Icon';

const navItems = [
    {
        caption: "Home",
        href: "/"
    }, {
        caption: "Products",
        href: "/products"
    }

];

export default (props) => {

    return (
        <header className="bg-indigo-900 text-indigo-200 shadow-md">
            <nav className="flex">
                <ul className="flex flex-1">
                    {
                        navItems.map((navItem, index) => (
                            <li key={index}>
                                <Link to={navItem.href} className="hover:bg-indigo-600 px-6 py-4 inline-block"> {navItem.caption} </Link>
                            </li>
                        )
                        )
                    }
                </ul>
                <Link to="/cart" className="hover:bg-indigo-800 bg-indigo-500 px-6 py-4 inline-block">
                    <Icon styles={"inline-block mr-2 text-2xl"} icon={<IoMdCart/>} />
                       
                    {props.shopping_cart.length}

                </Link>
            </nav>

        </header>
    )
}