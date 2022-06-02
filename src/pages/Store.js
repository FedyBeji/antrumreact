import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "@firebase/firestore";
import {db} from '../firebase-config'

function Store(props) {
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
        <>
            <h1>antrum<br/>Store</h1>
            <button></button>
            {products.map((user) =>{
                return(
                    <div>
                        <h3>{user.id}</h3>
                    </div>
                )

            })}
        </>
    );
}

export default Store;
