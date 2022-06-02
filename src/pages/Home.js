import React from 'react';
import HomeCards from "../components/parts/home/HomeCards";
import HomeContactBlock from "../components/parts/home/HomeContactBlock";


export default function Home(props) {
    return (
        <>
            <h1 className='pt-7'>
                antrum
                <br/>
                music
            </h1>
            <p className='text-3xl text-center px-[25%]'>
                Nous sommes un collectif de passionné de musique, prêt à mettre tout nos talent en oeuvre afin de
                pouvoir répondre a toutes vos attentes et envies.
            </p>
            <img src="/media/HomeStudio.jpg" alt="" className='w-full h-auto px-12 py-5'/>
            <button className='btn btn-outline-light mx-auto'>
                en savoir plus sur nous
                <span></span><span></span><span></span><span></span>
            </button>

            <div className="home-cards-block">
                <HomeCards
                    title='visuels'
                    img_link='/media/HomeStudio.jpg'
                    img_alt='visuels'
                    desc='lorem fdsf f sdf sdf sdf sdf sdf sdf sdfsd fsd f sdf sdf ds fsd f sdf sd fsd f dsf sd fds f dsf d fsf'
                    link='/visuels'
                />
                <HomeCards
                    title='réalisations de clips'
                    img_link='/media/HomeStudio.jpg'
                    img_alt='realisations de clips'
                    desc='lorem fdsf f sdf sdf sdf sdf sdf sdf sdfsd fsd f sdf sdf ds fsd f sdf sd fsd f dsf sd fds f dsf d fsf'
                    link='/visuels/clips'
                />
                <HomeCards
                    title='composition sur mesure'
                    img_link='/media/HomeStudio.jpg'
                    img_alt='composition sur mesure'
                    desc='lorem fdsf f sdf sdf sdf sdf sdf sdf sdfsd fsd f sdf sdf ds fsd f sdf sd fsd f dsf sd fds f dsf d fsf'
                    link='/beats/compo'
                />
                <HomeCards
                    title='studio'
                    img_link='/media/HomeStudio.jpg'
                    img_alt='studio'
                    desc='lorem fdsf f sdf sdf sdf sdf sdf sdf sdfsd fsd f sdf sdf ds fsd f sdf sd fsd f dsf sd fds f dsf d fsf'
                    link='/studio'
                />
                <HomeCards
                    title='store'
                    img_link='/media/HomeStudio.jpg'
                    img_alt='store'
                    desc='lorem fdsf f sdf sdf sdf sdf sdf sdf sdfsd fsd f sdf sdf ds fsd f sdf sd fsd f dsf sd fds f dsf d fsf'
                    link='/store'
                />
                <HomeCards
                    title='mixage mastering'
                    img_link='/media/HomeStudio.jpg'
                    img_alt='mixage mastering'
                    desc='lorem fdsf f sdf sdf sdf sdf sdf sdf sdfsd fsd f sdf sdf ds fsd f sdf sd fsd f dsf sd fds f dsf d fsf'
                    link='/studio/mixmaster'
                />
            </div>
            <HomeContactBlock/>
        </>
    );
}
