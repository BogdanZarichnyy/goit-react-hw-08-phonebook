import { useSelector, useDispatch } from "react-redux";

import { selectContacts } from 'redux/contacts/selectorsContacts';
import { addContactsThunk } from 'redux/contacts/thunksContacts';

import css from './ContactForm.module.css'

export const ContactForm = () => {

    const contactsStore = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleAddName = event => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const { name, number } = Object.fromEntries(formData);

        const contact = {
            name,
            number,
        };

        if (contactsStore.map(contact => contact.name).includes(name)) {
            alert(`${name} is already in contacts`);
            return;
        }

        dispatch(addContactsThunk(contact));
        event.target.reset();
    }

    return (
        <>
            <h1>Phonebook</h1>

            <form className={css.form} onSubmit={handleAddName} >

                <label className={css.label} htmlFor="name" >Name</label>
                <input className={css.input} id="name" type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" placeholder="Enter name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
                
                <label className={css.label} htmlFor="phone" >Number</label>
                <input className={css.input} id="phone" type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" placeholder="000-000-0000" required />

                <button className={css.button} type="submit">Add contact</button>

            </form>
        </>
    )
}