import React from 'react';
import {useEffect, useState} from "react";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../firebase-config";
import AdminCard from "../../components/parts/admin/AdminCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AdminChart from "../../components/parts/admin/AdminChart";

export default function WebSiteManagement(props) {
    const [comments, setComments] = useState([]);
    const commentsCollection = collection(db, 'comments')

    useEffect(() => {
        const getComments = async () => {
            const data = await getDocs(commentsCollection)
            setComments(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getComments()
    }, []);


    return (<section className='p-6'>
            <div className="title-block w-full">
                <h2>gestion du site</h2>
            </div>
            <div className="card-block w-full flex justify-around">
                <AdminCard
                    title='nouveaux messages'
                    value={comments.length}
                    icon={<FontAwesomeIcon icon="fa-solid fa-envelope" size='2x'/>}
                    link='/home'
                />
                <AdminCard
                    title='nouveaux commentaires'
                    value={comments.length}
                    icon={<FontAwesomeIcon icon="fa-solid fa-message" size='2x'/>}
                    link='/home'
                />
                <AdminCard
                    title='nouveaux utilisateurs'
                    value={comments.length}
                    icon={<FontAwesomeIcon icon="fa-solid fa-user" size='2x'/>}
                    link='/home'
                />
                <AdminCard
                    title='nouvelles ventes'
                    value={comments.length}
                    icon={<FontAwesomeIcon icon="fa-solid fa-cart-shopping" size='2x'/>}
                    link='/home'
                />
            </div>
            <div className="chart-block w-full flex justify justify-around">
                <AdminChart
                    data='aaa'
                    x-axis_name='aaa'
                    y-axis_name='aaa'
                    x-axis_step='aaa'
                    y-axis_step='aaa'
                />
                <AdminChart
                    data='aaa'
                    x-axis_name='aaa'
                    y-axis_name='aaa'
                    x-axis_step='aaa'
                    y-axis_step='aaa'
                />
            </div>
        </section>
    );
}