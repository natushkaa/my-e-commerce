import React from 'react';
import './Header.css';

const Header = (props) => {
    
    return (
        <div>
            <h1>{props.title} </h1>
            <h1>{props.subtitle} </h1>
        </div>
    )
}


export default Header;

