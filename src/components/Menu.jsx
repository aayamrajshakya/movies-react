import React from "react";
import './../index.css';

const Menu = ({ menuItems }) => {
    return (
        <div className="menu">
            <ul>
                {menuItems.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default Menu;