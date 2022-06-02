import React from 'react';
import {Link} from "react-router-dom";

function AdminNavbar(props) {

    return (
        <nav className='admin-nav bg-dark/[.2] w-1/5 h-full'>
            <ul>
                <li>
                    <Link className='nav-link link' to="/admin/home">
                        gestion du site
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/admin/users">
                        gestion des utilisateurs
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/admin/beats">
                        gestion des beats
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/admin/goodies">
                        gestion des goodies
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/admin/articles">
                        gestion des articles
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/admin/comments">
                        gestion des commentaires
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/admin/reports">
                        gestion des signalement
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/admin/sells">
                        gestion des ventes
                    </Link>
                </li>

            </ul>
        </nav>
    );
}

export default AdminNavbar;