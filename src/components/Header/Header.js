import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <a href="/shop"><img src={logo} alt="" /></a>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;