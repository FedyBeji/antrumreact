import React, {useContext} from 'react';
import {UserContext} from "../context/userContext";
import {Navigate, Outlet} from "react-router-dom";
import UserNavbar from "../components/parts/account/UserNavbar";

function UserAccount(props) {
    const {currentUser} = useContext(UserContext)

    if (!currentUser){
        return <Navigate to='/beats' />
    }

    return (
        <>
            <h1 className='pt-7'>
               mon compte
            </h1>
            <hr/>
            <div className="flex">
                <div className="w-1/4">
                    <UserNavbar/>
                </div>
                <div className="w-3/4">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default UserAccount;
