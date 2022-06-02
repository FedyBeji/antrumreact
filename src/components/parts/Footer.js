import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <nav className='primary-nav'>
            <ul>
                <li>
                    <Link className='nav-link link' to="/home">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/admin/home">
                        admin
                    </Link>
                </li>

            </ul>
        </nav>    );
}

export default Footer;
