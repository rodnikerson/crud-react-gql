import React from 'react';
import "./footer-styles.css";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="techs">
                <img src="./assets/react.svg" alt="React Logo" />
                <img src="./assets/nodejs.svg" alt="NodeJS Logo" />
                <img src="./assets/graphql.svg" alt="GraphQL Logo" />
            </div>
            <p className="owner">
                <img src="./assets/network.svg" alt="World Logo" />
                &#169; Rodolpho Nikerson :)
            </p>
        </footer>
    )
}

export default Footer;