import React from 'react';
import {useEffect, useState} from "react";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../firebase-config";

function ArticlesManagement(props) {
    const [products, setProducts] = useState([]);
    const productsCollection = collection(db, 'users')

    useEffect(() => {
        const getProducts = async () =>{
            const data = await getDocs(productsCollection)
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getProducts()
    }, []);


    return (
        <section className='p-6'>
            <div className="title-block w-full">
                <h2>gestion des articles</h2>
            </div>
            <div className="card-block w-full flex">
                {products.map((user) =>{
                    return(
                        <>
                            <div className='p-4'>
                                <h3>{user.id}</h3>
                            </div>
                            <br/>
                        </>

                    )

                })}
            </div>
        </section>

    );
}


export default ArticlesManagement;
