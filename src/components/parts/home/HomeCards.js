import React from 'react';
import {Link} from "react-router-dom";

export default function HomeCards(props) {
    let {title, img_link, img_alt, desc, link} = props
    return (
        <div className='home-card w-[45%] py-12'>
            <div className="card-body">
                <div className="card-header">
                    <h3>{title}</h3>
                </div>
                <div className="card-main p-6">
                    <img src={img_link} alt={img_alt}/>
                    <p className='py-5 text-xl'>{desc}</p>
                </div>
                <div className="card-footer">
                    <Link className='btn btn-outline-light hover:text-light' to={link}>
                        en savoir plus
                    </Link>
                </div>
            </div>
        </div>
    );
}