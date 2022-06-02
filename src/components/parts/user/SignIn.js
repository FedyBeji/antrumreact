import React, {useContext, useRef, useState} from 'react';
import {UserContext} from "../../../context/userContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SignIn() {


    const {toggleModals, modalState, signIn} = useContext(UserContext);

    const [validation, setValidation] = useState('');

    let inputs = useRef([]);
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.unshift(el)
        }
    }


    const handleForm = async (e) => {
        e.preventDefault()
        try {
            await signIn(
                inputs.current[1].value,
                inputs.current[0].value
            )
            setValidation('')
            inputs = []
            toggleModals('close')

        } catch (err) {
            setValidation('Email et/ou mot de passe incorrect')
        }
    }
    const closeModal = () => {
        setValidation('')
        toggleModals('close')
        inputs = []

    }
    return (
        <>
            {
                modalState.signInModal && (
                    <div
                        className='modal sign-in-modal fixed bg-dark/[.5] h-screen w-screen top-0 flex justify-center items-center'>
                        <div onClick={closeModal} className="modal-bg fixed top-0 bg-dark/[.5] h-screen w-screen"></div>
                        <div className="modal-content z-10 rounded-xl bg-primary w-2/3 border-2 border-xl border-light">
                            <div className="modal-header px-8 border-b-2 border-light flex justify-between items-center">
                                <h2 className='py-4'>se connecter</h2>
                                <button onClick={closeModal}>
                                    <FontAwesomeIcon icon="fa-solid fa-xmark" size='3x'/>
                                </button>
                            </div>
                            <div className="modal-body p-4 w-100">
                                <form onSubmit={handleForm}
                                      className="sign-in-form flex justify-center items-center flex-col">
                                    <div className="w-full">
                                        <label htmlFor="signInEmail">e-mail</label>
                                        <input
                                            ref={addInputs}
                                            type="email"
                                            required
                                            id='signInEmail'
                                            name='email'
                                            className='form-input'
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="signInPwd">mot de passe</label>
                                        <input
                                            ref={addInputs}
                                            type="password"
                                            required
                                            id='signInPwd'
                                            name='password'
                                            className='form-input'
                                        />
                                    </div>
                                    <p>{validation}</p>
                                    <button type='submit' className='btn btn-outline-light'>envoyer</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}