import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { registerThunk } from 'redux/authorization/thunksAuth';

import css from './Registration.module.css'

export const Registration = () => { 

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name': return setName(value);
            case 'email': return setEmail(value);
            case 'password': return setPassword(value);
            default: return;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(registerThunk({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
        event.target.reset();
    }

    return (
        <>
            <p>Registration page</p>

            <form className={css.form} onSubmit={handleSubmit}>

                <label className={css.label} htmlFor="name" >Name</label>
                <input className={css.input} id="name" type="text" name="name" onChange={handleChange} value={name} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" placeholder="Enter name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
                
                <label className={css.label} htmlFor="email" >E-mail address</label>
                <input className={css.input} id="email" type="email" name="email" onChange={handleChange} value={email} title="E-mail address invalid" placeholder="example@email.com" required />
                
                <label className={css.label} htmlFor="password" >Password</label>
                <input className={css.input} id="password" type="password" name="password" onChange={handleChange} value={password} required />

                <button className={css.button} type="submit">Register</button>

            </form>
        </>
    )
}