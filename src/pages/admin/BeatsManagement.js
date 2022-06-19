import React from 'react';
import {useEffect, useState} from "react";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../firebase-config";
import TagsManagement from "../../components/parts/admin/beats/TagsManagement";

function BeatsManagement(props) {

    const [beats, setBeats] = useState([]);
    const beatsCollection = collection(db, 'tags')


    useEffect(() => {
        const getBeats = async () => {
            const data = await getDocs(beatsCollection)
            setBeats(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getBeats()
    }, []);



    return (
        <section className='p-6'>
            <div className="title-block w-full">
                <h2>gestion des beats</h2>
            </div>
            <TagsManagement/>
        </section>

    );
}


export default BeatsManagement;
