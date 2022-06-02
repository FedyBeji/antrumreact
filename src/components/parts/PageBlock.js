import React from 'react';
import {Link} from "react-router-dom";

function PageBlock(props) {
    let {type, title, img_link, img_alt, desc, link} = props
    if (type === 'left'){
        return (
            <div className="page-block p-6">

                <img src={img_link} alt={img_alt} className='w-[40%] h-auto p-1'/>
                <div className="w-[60%] page-block-info">
                    <h2 className="w-full">{title}</h2>
                    <p className='w-full text-2xl text-justify p-2'>
                        {desc}
                    </p>
                    <div className="w-full py-4">
                        <Link className=' btn btn-outline-light hover:text-light' to={link}>
                            en savoir plus
                        </Link>
                    </div>
                </div>


            </div>
        );
    }
    if (type === 'right'){
        return (
            <div className="page-block p-6">

                <div className="w-[60%] page-block-info">
                    <h2 className="w-full">{title}</h2>
                    <p className='w-full text-2xl text-justify p-2'>
                        {desc}
                    </p>
                    <div className="w-full py-4">
                        <Link className=' btn btn-outline-light hover:text-light' to={link}>
                            en savoir plus
                        </Link>
                    </div>
                </div>
                <img src={img_link} alt={img_alt} className='w-[40%] h-auto p-1'/>
            </div>
        );
    }

}

export default PageBlock;