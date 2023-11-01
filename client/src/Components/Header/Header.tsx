import React from 'react';
import "./header-styles.css";

function Header() {
    return (
        <header className="header-container">
            <img src="./assets/conversation.svg" alt="Logo" />
            <p># CRUD</p>
        </header>
    )
}

export default Header;