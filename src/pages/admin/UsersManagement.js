import React from 'react';
import {useEffect, useState, useRef} from "react";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../firebase-config";

function UsersManagement(props) {
    const [users, setUsers] = useState([]);
    const usersCollection = collection(db, 'users')
    const [addValidation, setAddValidation] = useState('');

    let inputs = useRef([]);
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.unshift(el)
        }
    }
    useEffect(() => {
        const getUsers = async () =>{
            const data = await getDocs(usersCollection)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers()
    }, []);

    const [usersAdmin, setUsersAdmin] = useState({
        addUsers: true,
        changeUsers: false
    });
    const toggleForm = form => {
        if (form === 'add') {
            setUsersAdmin({
                addUsers: true,
                changeUsers: false
            })
        }
        if (form === 'change') {
            setUsersAdmin({
                addUsers: false,
                changeUsers: true
            })
        }
    }
    return (
        <section className='p-6'>
            <div className="title-block w-full">
                <h2>gestion des utilisateurs</h2>
            </div>
            <div className="btn-block w-full flex justify-center">
                <button onClick={() => toggleForm('add')} className={usersAdmin.addUsers ? 'btn btn-outline-light active' : 'btn btn-outline-light'}>ajout</button>
                <button onClick={() => toggleForm('change')} className={usersAdmin.changeUsers ? 'btn btn-outline-light active' : 'btn btn-outline-light'}>modif</button>
            </div>
            <div className="form-block w-full">

                { usersAdmin.addUsers && (
                    <div className='users-add-form py-4'>
                        <h4>ajouter un utilisateur</h4>
                        <form className='flex flex-wrap'>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserPseudo">pseudo</label>
                                <input
                                    ref={addInputs}
                                    type="text"
                                    required
                                    id='addUserPseudo'
                                    name='pseudo'
                                    className='form-input'
                                />
                            </div>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserEmail">e-mail</label>
                                <input
                                    ref={addInputs}
                                    type="email"
                                    required
                                    id='addUserEmail'
                                    name='email'
                                    className='form-input'
                                />
                            </div>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserFirstName">prénom</label>
                                <input
                                    ref={addInputs}
                                    type="text"
                                    required
                                    id='addUserFirstName'
                                    name='first_name'
                                    className='form-input'
                                />
                            </div>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserLastName">nom</label>
                                <input
                                    ref={addInputs}
                                    type="text"
                                    required
                                    id='addUserLastName'
                                    name='last_name'
                                    className='form-input'
                                />
                            </div>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserLastName">ville</label>
                                <input
                                    ref={addInputs}
                                    type="text"
                                    required
                                    id='addUserLastName'
                                    name='last_name'
                                    className='form-input'
                                />
                            </div>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserLastName">pays</label>
                                <input
                                    ref={addInputs}
                                    type="text"
                                    required
                                    id='addUserLastName'
                                    name='last_name'
                                    className='form-input'
                                />
                            </div>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserLastName">code postal</label>
                                <input
                                    ref={addInputs}
                                    type="text"
                                    required
                                    id='addUserLastName'
                                    name='last_name'
                                    className='form-input'
                                />
                            </div>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserLastName">téléphone</label>
                                <input
                                    ref={addInputs}
                                    type="text"
                                    required
                                    id='addUserLastName'
                                    name='last_name'
                                    className='form-input'
                                />
                            </div>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserLastName">avatar</label>
                                <input
                                    ref={addInputs}
                                    type="text"
                                    required
                                    id='addUserLastName'
                                    name='last_name'
                                    className='form-input'
                                />
                            </div>
                            <div className="w-1/2 px-4 py-2">
                                <label htmlFor="addUserLastName">statut</label>
                                <input
                                    ref={addInputs}
                                    type="text"
                                    required
                                    id='addUserLastName'
                                    name='last_name'
                                    className='form-input'
                                />
                            </div>
                            <p>{addValidation}</p>
                            <div className="btn-block w-full text-right px-12">
                                <button type='submit' className='btn btn-outline-light'>ajouter</button>
                            </div>


                        </form>
                    </div>
                )}
                { usersAdmin.changeUsers && (
                    <p> modif </p>
                )}
            </div>
        </section>

    );
}

export default UsersManagement;
