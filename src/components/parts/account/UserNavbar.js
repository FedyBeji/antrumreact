import React, {useContext} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth"
import {auth} from '../../../firebase-config'


function UserNavbar(props) {

    const navigate = useNavigate()
    const logOut = async () => {
        try {
            await signOut(auth)
            navigate('/studio')
        } catch {
            alert('deco impossible')
        }
    }
    return (
        <>
            <ul>
                <li>
                    <Link className='nav-link link' to="/account/details">
                        Détails du compte
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/account/order">
                        Commandes
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/account/download">
                        Téléchargement
                    </Link>
                </li>
                <li>
                    <button onClick={logOut} className='nav-link'>Déconnexion</button>
                </li>
            </ul>
        </>
    );
}

export default UserNavbar;
