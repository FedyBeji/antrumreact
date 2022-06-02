import React from 'react';
import PageBlock from "../components/parts/PageBlock";

function Visuels(props) {
    return (
        <>
            <h1 className='pt-7'>
                visuels
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
            <PageBlock
                type='left'
                title='réalisations de clips'
                img_link='/media/HomeStudio.jpg'
                img_alt='aaa'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi deserunt, dicta dignissimos exercitationem explicabo facere, iusto mollitia odio omnis repudiandae saepe similique sunt vel voluptates. Consectetur ea recusandae tempora temporibus. Dolor est ex ipsam magnam nulla quas sunt vitae.'
                link='/visuels/clips'
            />
            <PageBlock
                type='right'
                title='identité visuelle'
                img_link='/media/HomeStudio.jpg'
                img_alt='aaa'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi deserunt, dicta dignissimos exercitationem explicabo facere, iusto mollitia odio omnis repudiandae saepe similique sunt vel voluptates. Consectetur ea recusandae tempora temporibus. Dolor est ex ipsam magnam nulla quas sunt vitae.'
                link='/visuels/identity'
            />

        </>
    );
}

export default Visuels;