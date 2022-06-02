import {Outlet, useLocation} from "react-router-dom";
import Footer from "./parts/Footer";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {faSnapchat, faYoutube, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import HomeHeroBanner from "./parts/home/HomeHeroBanner";
import HeroBanner from "./parts/HeroBanner";
import Navbar from "./parts/Navbar";
// eslint-disable-next-line
import React, {useState} from "react";
import SignIn from "./parts/user/SignIn";
import SignUp from "./parts/user/SignUp";

library.add(fas, faSnapchat, faYoutube, faInstagram, faFacebook)

export default function App() {

    let location = window.location.href
    let location2 = useLocation();
console.log(location2.pathname)
    function redirectToHome() {
        window.setTimeout(function () {
            location = process.env.REACT_APP_HOME_URL + 'home';
        }, 5000);
    }

    if (location === process.env.REACT_APP_HOME_URL) {
        redirectToHome()
    }

    return (
        <>
            <main className=''>
                <div className=''>

                        <HomeHeroBanner/>

                    <HeroBanner/>
                    <div className="md:container pb-9 text-center mt-9 bg-dark/[.3]">
                        <Navbar/>
                        <Outlet/>
                    </div>
                </div>
            </main>
            <Footer/>
            <SignIn/>
            <SignUp/>
        </>
    );
}