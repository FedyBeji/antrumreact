import React from 'react';
import BeatsCard from "./BeatsCard";

function BeatsCards(props) {
    return (
        <div className='beatscards py-8'>
            <BeatsCard
                type='basic'
                format='mp3'
                price='19,99€'
                sells='Ventes limitées à 2500 éditions'
                diffusions='Diffusion plateformes (Deezer,Spotify...)'
                streams='Limite de streams 10 000'
                radio='1 Diffusion radio'
                stillInSell='Le beat reste en vente'
            />
            <BeatsCard
                type='premium'
                format='mp3/wav'
                price='49,99€'
                sells='Ventes limitées à 5000 éditions'
                diffusions='Diffusion plateformes (Deezer,Spotify...)'
                streams='Limite de streams 100 000'
                radio='10 Diffusions radio'
                stillInSell='Le beat reste en vente'
            />
            <BeatsCard
                type='unlimited'
                format='mp3/wav + pistes'
                price='99,99€'
                sells='Ventes illimitées'
                diffusions='Diffusion plateformes (Deezer,Spotify...)'
                streams='Streams illimitées'
                radio='Diffusions radio illimitées'
                stillInSell='Le beat reste en vente'
            />
            <BeatsCard
                type='exclusive'
                format='mp3/wav + pistes'
                price='199,99€'
                sells='Ventes illimitées'
                diffusions='Diffusion plateformes (Deezer,Spotify...)'
                streams='Streams illimitées'
                radio='Diffusions radio illimitées'
                stillInSell='Le beat est retiré de la vente'
            />

        </div>
    );
}

export default BeatsCards;

