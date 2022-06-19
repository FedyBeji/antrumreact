import React from 'react';
import {useEffect, useState, useRef} from "react";
import {collection, getDocs, addDoc, doc, deleteDoc} from "@firebase/firestore";
import {db} from "../../../../firebase-config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TagsManagement(props) {
    const [tagsBlock, setTagsBlock] = useState(true);

    const [validation, setValidation] = useState('');

    const [tags, setTags] = useState([]);
    const tagsCollection = collection(db, 'tags')

    const newTagRef = useRef('');

    useEffect(() => {
        const getTags = async () => {
            const data = await getDocs(tagsCollection)
            setTags(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getTags()
    }, []);

    const createTag = async (e) => {
        e.preventDefault()
        const data = newTagRef.current.value
        let valueCheck = tags.some(function (item) {
            return item.name === data
        });
        if (valueCheck) {
            setValidation('Le mot-clé ajouté existe deja')
        } else {
            await addDoc(tagsCollection, {name: newTagRef.current.value})
            window.location.reload();
        }
    }
    const deleteTag = async (id) => {
        const tagDoc = doc(db, 'tags', id)
        if (window.confirm("Press a button!")) {
            await deleteDoc(tagDoc)
            window.location.reload();
        }
    }

    const toggleTagsBlock = () => {
        if (tagsBlock){
            setTagsBlock(false)
        } else {
            setTagsBlock(true)
        }

    }


    return (
        <div className='tags-management-block flex flex-wrap'>
            <div className="tags-management-header w-full my-8 px-4 flex justify-between" >
                <h3 className=''>gestion des mots-clés</h3>
                <button>
                    <FontAwesomeIcon
                        onClick={toggleTagsBlock}
                        icon="fa-solid fa-angle-down"
                        rotation={tagsBlock ? 180 : 0}
                        size='2x'/>
                </button>
            </div>
            {
                tagsBlock && (
                    <>
                        <div className="tags-form w-1/3 p-3">
                            <h3 className='text-lg'>ajout de mots-clés</h3>
                            <form onSubmit={createTag} className='p-5 bg-dark/[.3] rounded-xl'>
                                <label htmlFor="tagsName">Mot-clé :</label>
                                <input
                                    type="text"
                                    required
                                    id='tagsName'
                                    name='name'
                                    ref={newTagRef}
                                />
                                <p>{validation}</p>
                                <button className='btn btn-outline-light'>ajouter</button>
                            </form>
                        </div>
                        <div className="tags-list w-3/5 p-3 rounded-xl mb-3 h-full">
                            <h3 className='text-lg'>liste des mots-clés</h3>
                            <div className="list-block p-4 flex-wrap flex justify-around bg-dark/[.3] rounded-xl">
                                {tags.map((tag) => {
                                    return (
                                        <p
                                            className='p-3 bg-dark/[.3] m-2 rounded-xl'
                                            key={tag.id}
                                        >
                                            <span className='pr-2'>{tag.name}</span>
                                            <button onClick={() => {
                                                deleteTag(tag.id)
                                            }}>
                                                <FontAwesomeIcon icon="fa-solid fa-circle-xmark"/>
                                            </button>
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default TagsManagement;
