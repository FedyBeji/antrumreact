import React from 'react';

function AdminCard(props) {
    let {title, link, icon, value} = props
    return (
        <div className='text-center w-1/5 m-2 p-2 border-light border rounded-xl'>

            <div className="title-block">
                <h5>{title}</h5>
            </div>
            <div className="main-block flex py-3">
                <div className="w-1/2">
                    <p>{value}</p>
                </div>
                <div className="w-1/2">
                    {icon}
                </div>
            </div>
            <div className="btn-block">
                <button className=''>en savoir plus</button>
            </div>
        </div>
    );
}

export default AdminCard;
