import React from 'react';

function BeatsCard(props) {
    let {type, format, price, sells, diffusions, streams, radio, stillInSell} = props
    return (
        <div className='beatscard w-1/5'>
            <h3>{type}</h3>
            <h3>{format}</h3>
            <h2>{price}</h2>
            <hr/>
            <div className="beatscard-info">
                <p>{sells}</p>
                <p>{diffusions}</p>
                <p>{sells}</p>
                <p>{streams}</p>
                <p>Créditer (prod by Antrum)</p>
                <p>{radio}</p>
                <p>{stillInSell}</p>
            </div>

        </div>
    );
}

export default BeatsCard;
