import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectContacts, selectFilter, selectFilteredContacts, selectIsLoading, selectError } from 'redux/contacts/selectorsContacts';
import { getContactsThunk, deleteContactsThunk } from 'redux/contacts/thunksContacts';
import { selectIsLoggedIn, selectUserToken } from 'redux/authorization/selectorsAuth';

import { Modal } from "components/Modal/Modal";

import css from './ContactList.module.css'

export const ContactList = () => {

    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const usertoken = useSelector(selectUserToken);
    const isLoadingStore = useSelector(selectIsLoading);
    const errorStore = useSelector(selectError);

    const findName = useSelector(selectFilter);
    const userContacts = useSelector(selectContacts);
    const filteredContacts = useSelector(selectFilteredContacts);

    useEffect(() => {
        if (!isLoggedIn) {
            return;
        }
        dispatch(getContactsThunk());
    }, [isLoggedIn, usertoken, dispatch]);

    const handleDeleteContact = (id) => {
        dispatch(deleteContactsThunk(id));
    }

    const handleCloseModal = ({ currentTarget, target }) => {
        if (currentTarget === target) {
            setShowModal(false);
        }
    }
    
    const handleCloseModalKeyDown = ({ code }) => {
        if (code === 'Escape') {
            setShowModal(false);
        }
    }

    const handleOpenModal = event => {
        event.preventDefault();
        setShowModal(true);
    }

    return (
        <>
            <h2>Contacts</h2>

            {isLoadingStore && <p>Loading data</p>}

            {errorStore && <p>Error: {errorStore}</p>}

            <ul className={css.list}>
                {!!findName ?
                    filteredContacts.map(contact => (
                        <Fragment key={contact.id}>
                            <li>{contact.name}: {contact.number}
                                <button className={css.btndel} onClick={handleOpenModal} type="button">edit</button>
                                <button className={css.btndel} onClick={() => handleDeleteContact(contact.id)} type="button">delete</button>
                            </li>
                            
                            {showModal && <Modal
                                handleCloseModal={handleCloseModal}
                                handleCloseModalKeyDown={handleCloseModalKeyDown}
                                setShowModal={setShowModal}
                                contact={contact}
                            />}
                        </Fragment>
                    )) :
                    userContacts.map(contact => (
                        <Fragment key={contact.id}>
                            <li>{contact.name}: {contact.number}
                                <button className={css.btndel} onClick={handleOpenModal} type="button">edit</button>
                                <button className={css.btndel} onClick={() => handleDeleteContact(contact.id)} type="button">delete</button>
                            </li>

                            {showModal && <Modal
                                handleCloseModal={handleCloseModal}
                                handleCloseModalKeyDown={handleCloseModalKeyDown}
                                setShowModal={setShowModal}
                                contact={contact}
                            />}
                        </Fragment>
                    ))
                }
            </ul>

        </>
    )
}