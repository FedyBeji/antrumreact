import React from 'react';
import {Outlet} from "react-router-dom";

import AdminNavbar from "../../components/parts/admin/AdminNavbar";
import Navbar from "../../components/parts/Navbar";
import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/userContext";
import Footer from "../../components/parts/Footer";

function Admin(props) {
    const {currentUser} = useContext(UserContext)

    if (!currentUser) {
        return <Navigate to='/beats'/>
    }
    return (
        <>
            <main className='h-screen w-screen'>
                <Navbar/>
                <section className='flex h-5/6'>
                    <AdminNavbar/>
                    <div className="w-4/5">
                        <Outlet/>
                    </div>
                </section>


                <Footer/>
            </main>

        </>
    );
}

export default Admin;
