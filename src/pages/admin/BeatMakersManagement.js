import React, {useState, useEffect} from 'react';
import {collection, getDocs, addDoc, doc, deleteDoc, updateDoc} from "@firebase/firestore";
import {db} from "../../firebase-config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Select from "react-select";

function BeatMakersManagement(props) {
    const [formBlock, setFormBlock] = useState(true);

    const [beatmakers, setBeatmakers] = useState([]);
    const beatmakersCollection = collection(db, 'beatmakers')

    const [users, setUsers] = useState([]);
    const usersCollection = collection(db, 'users')

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    useEffect(() => {
        const getBeatmakers = async () => {
            const data = await getDocs(usersCollection)
            setBeatmakers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getBeatmakers()
    }, []);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollection)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers()
    }, []);

    const toggleTagsBlock = () => {
        if (formBlock) {
            setFormBlock(false)
        } else {
            setFormBlock(true)
        }

    }
    return (
        <section className='p-6'>
            <div className="title-block w-full">
                <h2>gestion des beatmakers</h2>
            </div>
            <div className="beatmakers-form-block">
                <div className="tags-management-header w-full my-8 px-4 flex justify-between">
                    <h3 className=''>ajout / modification beatmakers</h3>
                    <button>
                        <FontAwesomeIcon
                            onClick={toggleTagsBlock}
                            icon="fa-solid fa-angle-down"
                            rotation={formBlock ? 180 : 0}
                            size='2x'/>
                    </button>
                </div>
                {
                    formBlock && (
                        <form className='flex flex-wrap'>
                            <div className="w-1/2 p-4">
                                <label htmlFor="aaa">aaa</label>

                                <Select options={options}
                                        defaultValue={[options[1], options[0]]}
                                        isMulti
                                        name="colors"

                                        className="basic-multi-select"
                                        classNamePrefix="select"/>
                            </div>
                            <div className="w-1/2 p-4">
                                <label htmlFor="aaa">aaa</label>
                                <input
                                    type="text"
                                />
                            </div>
                            <div className="w-1/2 p-4">
                                <label htmlFor="aaa">aaa</label>
                                <input
                                    type="text"
                                />
                            </div>
                            <div className="w-1/2 p-4">
                                <label htmlFor="aaa">aaa</label>
                                <input
                                    type="text"
                                />
                            </div>
                        </form>
                    )
                }

            </div>

            <div className="beatmakers-list-block">

            </div>

        </section>
    );
}

export default BeatMakersManagement;
