import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import { editContactsThunk } from 'redux/contacts/thunksContacts';

import css from './Modal.module.css';

export const Modal = ({ handleCloseModal, handleCloseModalKeyDown, setShowModal, contact: { id, name, number } }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('keydown', handleCloseModalKeyDown);

        return () => {
            window.removeEventListener('keydown', handleCloseModalKeyDown);
        }
    }, [handleCloseModalKeyDown]);

    const handleEditContact = event => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const { name, number } = Object.fromEntries(formData);

        const contact = {
            id,
            name,
            number,
        };

        dispatch(editContactsThunk(contact));
        event.target.reset();
        setShowModal(false);
    }

    return ReactDOM.createPortal(
        <div className={css.backdrop} onClick={handleCloseModal} onKeyDown={handleCloseModalKeyDown}>
            <div className={css.modal}>

                <p className={css.title}>Enter new data for:</p>
                <span className={css.value}>Name contact: {name}</span>
                <span className={css.value}>Number contact: {number}</span>

                <form className={css.form} onSubmit={handleEditContact} >

                    <label className={css.label} htmlFor="name" >Name</label>
                    <input className={css.input} id="name" type="text" name="name" defaultValue={name} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" placeholder="Enter name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
                    
                    <label className={css.label} htmlFor="phone" >Number</label>
                    <input className={css.input} id="phone" type="tel" name="number" defaultValue={number} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" placeholder="000-000-0000" required />

                    <button className={css.button} type="submit">Edit contact</button>

                </form>
            </div>
        </div>,
        document.body
    );
}

Modal.protoTypes = {
    handleCloseModalKeyDown: PropTypes.func,
    handleCloseModal: PropTypes.func,
    contact: PropTypes.objectOf({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    }),
};