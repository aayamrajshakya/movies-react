import React from "react";
import Menu from "./Menu";
import './../index.css';

const Header = ({ menuItems }) => {
    return (
        <div id="header">
            <div className="logo">
                <img
                    src="https://cataz.to/images/group_1/theme_9/logo.png?v=0.1"
                    alt="img"
                    draggable="false"
                />
            </div>

            <Menu menuItems={menuItems} />

            <div>
                <button className="login">
                    <i className="far fa-user" style={{ marginRight: "10px" }}></i>Login
                </button>
            </div>
        </div>
    );
}

export default Header;