import React, {useContext} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {UserContext} from "../../context/userContext";
import {signOut} from "firebase/auth"
import {auth} from '../../firebase-config'

function Navbar(props) {


    const {toggleModals} = useContext(UserContext)

    const navigate = useNavigate()

    const logOut = async () => {
        try {
            await signOut(auth)
            navigate('/studio')
        } catch {
            alert('deco impossible')
        }
    }
    const {currentUser} = useContext(UserContext)


    return (
        <nav className='primary-nav bg-dark/[.5]'>
            <ul>
                <li>
                    <Link className='nav-link link' to="/home">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/beats">
                        Beats
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/studio">
                        Studio
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/visuels">
                        Visuels
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/about">
                        à propos
                    </Link>
                </li>
                <li>
                    <Link className='nav-link link' to="/store">
                        store
                    </Link>
                </li>

                {
                    !currentUser && (
                        <>
                            <li>
                                <button onClick={() => toggleModals('signIn')} className='nav-link'>Sign In</button>
                            </li>
                            <li>
                                <button onClick={() => toggleModals('signUp')} className='nav-link'>Sign up</button>
                            </li>
                        </>
                    )}
                {
                    currentUser && (
                        <>
                            <li>
                                <Link className='nav-link link' to="/account">
                                    user
                                </Link>
                            </li>
                            <li>
                                <button onClick={logOut} className='nav-link'>Log Out</button>
                            </li>
                        </>
                    )}
            </ul>
        </nav>
    );
}

export default Navbar;
