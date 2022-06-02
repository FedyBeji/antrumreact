import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function HomeContactBlock(props) {
    return (
        <>
            <div className="contact-block">
                <div className="contact-header w-full">
                    <h2>contactez nous</h2>
                </div>
                <div className="contact-form md:w-1/2 text-left px-5">

                    <label htmlFor="contact-name">nom :</label>
                    <input type="text" className="form-input rounded-xl" id='contact-name'/>

                    <label htmlFor="contact-email">e-mail :</label>
                    <input type="email" className="form-input rounded-xl" id='contact-email'/>

                    <label htmlFor="contact-object">objet :</label>
                    <input type="text" className="form-input rounded-xl" id='contact-object'/>

                    <label htmlFor="contact-message">message :</label>
                    <textarea className="form-input rounded-xl" id='contact-message'/>

                    <input type="submit" className="btn btn-outline-light" id='contact-submit'/>

                </div>
                <div className="contact-info md:w-1/2">

                    <div className="w-1/2 text-right contact-info-block justify-end">
                        <h3 className='m-0'>adresse</h3>
                    </div>
                    <div className="w-1/2 text-left contact-info-block justify-start">
                        <p className='text-xl'>
                            171 boulevard davout
                            <br/>
                            75020 Paris
                        </p>
                    </div>


                    <div className="w-1/2 text-right contact-info-block justify-end">
                        <h3 className='m-0'>téléphone</h3>
                    </div>
                    <div className="w-1/2 text-left contact-info-block justify-start">
                        <p className='text-xl'>
                            <a href="/">06 47 73 79 52</a>
                        </p>
                    </div>


                    <div className="w-1/2 text-right contact-info-block justify-end">
                        <h3 className='m-0'>e-mail</h3>
                    </div>
                    <div className="w-1/2 text-left contact-info-block justify-start">
                        <p className='text-xl'>
                            <a href="/">contact@antrummusic.fr</a>
                        </p>
                    </div>


                    <div className="w-1/2 text-right contact-info-block justify-end">
                        <h3 className='m-0'>réseaux sociaux</h3>
                    </div>
                    <div className="w-1/2 text-left contact-info-block justify-start">
                        <p className='text-xl flex '>
                            <button>
                                <FontAwesomeIcon icon="fa-brands fa-snapchat" />
                            </button>
                            <button>
                                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                            </button>
                            <button>
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            </button>
                            <button>
                                <FontAwesomeIcon icon="fa-brands fa-youtube" />
                            </button>

                        </p>
                    </div>


                </div>
            </div>

        </>
    );
}