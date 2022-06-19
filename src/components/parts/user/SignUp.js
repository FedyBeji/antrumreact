import React, {useContext, useRef, useState} from 'react';
import {UserContext} from "../../../context/userContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SignUp() {
    const {toggleModals, modalState, signUp} = useContext(UserContext);
    const [validation, setValidation] = useState('');
    const inputs = useRef([]);
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const handleForm = async (e) => {
        e.preventDefault()
        if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation('6 caractères minimum')
        }
        if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation('les mots de passe ne correspondent pas')
        }
        try {
             await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            setValidation('')
            toggleModals('close')

        } catch (err) {
            if (err.code === 'auth/invalid-email') {
                setValidation('Email invalide')
            }
            if (err.code === 'auth/email-already-in-use') {
                setValidation('Adresse Email deja utilisé')
            }
        }
    }
    const closeModal = () => {
        setValidation('')
        toggleModals('close')
    }
    return (
        <>
            {
                modalState.signUpModal && (
                    <div
                        className='modal sign-up-modal fixed bg-dark/[.5] h-screen w-screen top-0 flex justify-center items-center'>
                        <div onClick={closeModal} className="modal-bg fixed top-0 bg-dark/[.5] h-screen w-screen"></div>
                        <div className="modal-content z-10 rounded-xl bg-primary w-2/3 border-2 border-xl border-light">
                            <div className="modal-header px-8 border-b-2 border-light flex justify-between items-center">
                                <h2 className='py-4'>s'inscrire</h2>
                                <button onClick={closeModal}>
                                    <FontAwesomeIcon icon="fa-solid fa-xmark" size='3x'/>
                                </button>
                            </div>
                            <div className="modal-body p-4 w-100">
                                <form onSubmit={handleForm}
                                      className="sign-up-form flex flex-wrap">
                                    <div className="w-1/2 px-3 py-2">
                                        <label htmlFor="signUpEmail">e-mail</label>
                                        <input
                                            ref={addInputs}
                                            type="email"
                                            required
                                            id='signUpEmail'
                                            name='email'
                                            className='form-input'
                                        />
                                    </div>
                                    <div className="w-1/2 px-3 py-2">
                                        <label htmlFor="signUpPwd">mot de passe</label>
                                        <input
                                            ref={addInputs}
                                            type="password"
                                            required
                                            id='signUpPwd'
                                            name='password'
                                            className='form-input'
                                        />
                                    </div>
                                    <div className="w-1/2 px-3 py-2">
                                        <label htmlFor="signUpPwdRepeat">répété le mot de passe</label>
                                        <input
                                            ref={addInputs}
                                            type="password"
                                            required
                                            id='signUpPwdRepeat'
                                            name='password-repeat'
                                            className='form-input'
                                        />
                                    </div>

                                    <div className="w-full">
                                        <p>{validation}</p>
                                        <button type='submit' className='btn btn-outline-light'>envoyer</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}