import React from 'react';
import Auth from '../containers/Auth'

const Header = (props) => {

    return (
        <div className="container Header">
            <span className="BrandLogo">
                <span>[]</span>
                <span>
                    GOOD
                </span>
                <span>
                    DROP
                </span>
            </span>
            <Auth/>
        </div>
    )
};

export default Header;