import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";


export default function HomeHeroBanner(props) {

    const [homeHeroBanner, setHomeHeroBanner] = useState(false);
    function heroScroll() {
        document.getElementById('hero-banner').scrollIntoView()
    }
    function checkUrl() {
        if (window.location.href === process.env.REACT_APP_HOME_URL + 'home') {
            setHomeHeroBanner(true)
        } else {
            setHomeHeroBanner(false)
        }
    }
    //checkUrl()


        return (

            <div className='home-hero-banner'>
                <img src="./media/AntrumLogo.png" alt="Antrum logo" className='h-[40vh] w-auto p-8'/>
                <h3 className='text-2xl font-bold pb-4'>Label de musique</h3>
                <h3 className='text-2xl font-bold'>studio de création musicale</h3>
                <button className='mb-[15vh]' onClick={heroScroll}>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" size='4x'/>
                </button>
            </div>
        )

}


