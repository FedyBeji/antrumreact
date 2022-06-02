import React from 'react';
import BeatsCards from "../components/parts/beats/BeatsCards";
import ProdList from "../components/parts/beats/ProdList";

export default function Beats() {
    return (
        <>
            <h1 className='pt-7'>
                beatmaking
            </h1>
            <p className='text-3xl text-center px-[25%]'>
                Nous sommes un collectif de passionné de musique, prêt à mettre tout nos talent en oeuvre afin de
                pouvoir répondre a toutes vos attentes et envies.
            </p>
            <BeatsCards/>
            <p className='p-5 text-2xl text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam assumenda cum deserunt hic ipsa officia quo reiciendis similique vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore dolorem eius in, molestiae sequi tenetur! Atque nemo numquam quae.
            </p>
            <ProdList/>
        </>
    );
}
