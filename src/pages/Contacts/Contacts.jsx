import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

import css from './Contacts.module.css';

export const Contacts = () => { 
    return (
        <>
            <p>Contacts page</p>

            <ContactForm />

            <Filter />

            <ContactList />
        </>
    )
}