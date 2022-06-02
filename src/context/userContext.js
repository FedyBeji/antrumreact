import {createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase-config'

export const UserContext = createContext()

export function UserContextProvider(props) {

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)
    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)
    const [currentUserInfo, setCurrentUserInfo] = useState({
            pseudo: '',
            firstName: '',
            LastName: '',
            Email: '',
            City: '',
            Country: '',
            Zip: '',
            Phone: '',
            Avatar: '',
            Statut: ''
        }
    );

    useEffect(() => {
        return onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
        })
    }, []);

    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false,
    });
    const toggleModals = modal => {
        if (modal === 'signIn') {
            setModalState({
                signUpModal: false,
                signInModal: true,
            })
        }
        if (modal === 'signUp') {
            setModalState({
                signUpModal: true,
                signInModal: false,
            })
        }
        if (modal === 'close') {
            setModalState({
                signUpModal: false,
                signInModal: false,
            })
        }
    }
    return (
        <UserContext.Provider
            value={{modalState, toggleModals, signIn, signUp, currentUser, setCurrentUserInfo, currentUserInfo}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}