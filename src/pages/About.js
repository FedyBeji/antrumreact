import React from 'react';
import PageBlock from "../components/parts/PageBlock";

function About(props) {
    return (
        <>
            <h1 className='pt-7'>
                à propos
            </h1>
            <p className='text-3xl text-center px-[25%]'>
                Nous sommes un collectif de passionné de musique, prêt à mettre tout nos talent en oeuvre afin de
                pouvoir répondre a toutes vos attentes et envies.
            </p>
            <img src="/media/HomeStudio.jpg" alt="" className='w-full h-auto px-12 py-5'/>
            <p className='text-2xl text-justify p-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi deserunt, dicta
                dignissimos exercitationem explicabo facere, iusto mollitia odio omnis repudiandae saepe similique sunt
                vel voluptates. Consectetur ea recusandae tempora temporibus. Dolor est ex ipsam magnam nulla quas sunt
                vitae.
            </p>
            <div className="w-full">
                <h2>
                    quelques news
                </h2>
            </div>
            <PageBlock
                type='left'
                title='article 1'
                img_link='/media/HomeStudio.jpg'
                img_alt='aaa'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi deserunt, dicta dignissimos exercitationem explicabo facere, iusto mollitia odio omnis repudiandae saepe similique sunt vel voluptates. Consectetur ea recusandae tempora temporibus. Dolor est ex ipsam magnam nulla quas sunt vitae.'
                link='/visuels/clips'
            />
            <PageBlock
                type='right'
                title='article 2'
                img_link='/media/HomeStudio.jpg'
                img_alt='aaa'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi deserunt, dicta dignissimos exercitationem explicabo facere, iusto mollitia odio omnis repudiandae saepe similique sunt vel voluptates. Consectetur ea recusandae tempora temporibus. Dolor est ex ipsam magnam nulla quas sunt vitae.'
                link='/visuels/identity'
            />
            <div className="w-full">
                <a className='btn btn-outline-light hover:text-light' href={process.env.REACT_APP_HOME_URL + 'news'}>
                    voir tout nos article
                </a>
            </div>

        </>
    );
}

export default About;
