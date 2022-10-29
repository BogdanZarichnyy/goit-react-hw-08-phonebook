import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logInThunk } from 'redux/authorization/thunksAuth';

import css from './Login.module.css'

export const Login = () => { 

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email': return setEmail(value);
            case 'password': return setPassword(value);
            default: return;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(logInThunk({ email, password }));
        setEmail('');
        setPassword('');
        event.target.reset();
        location('/');
    }

    return (
        <>
            <p>Login page</p>

            <form className={css.form} onSubmit={handleSubmit}>
                
                <label className={css.label} htmlFor="email">E-mail address</label>
                <input className={css.input} id="email" type="email" name="email" onChange={handleChange} value={email} title="E-mail address invalid" placeholder="example@email.com" required />
                
                <label className={css.label} htmlFor="password">Password</label>
                <input className={css.input} id="password" type="password" name="password" onChange={handleChange} value={password} required />

                <button className={css.button} type="submit">Login</button>

            </form>

        </>
    )
}