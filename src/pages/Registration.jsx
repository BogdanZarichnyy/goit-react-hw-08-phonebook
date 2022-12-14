import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { registerThunk } from 'redux/authorization/thunksAuth';

const Registration = () => { 
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
        <form className="mx-auto my-9 flex flex-col p-7 rounded-xl border border-solid border-black bg-green-300" onSubmit={handleSubmit}>

            <label className="mb-2 text-2xl font-sm text-red-600" htmlFor="name" >Name</label>
            <input className="mb-6 text-2xl font-sm py-1 px-5 rounded-xl border border-black" id="name" type="text" name="name" onChange={handleChange} value={name} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" placeholder="Enter name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
            
            <label className="mb-2 text-2xl font-sm text-red-600" htmlFor="email" >E-mail address</label>
            <input className="mb-6 text-2xl font-sm py-1 px-5 rounded-xl border border-black" id="email" type="email" name="email" onChange={handleChange} value={email} title="E-mail address invalid" placeholder="example@email.com" required />
            
            <label className="mb-2 text-2xl font-sm text-red-600" htmlFor="password" >Password</label>
            <input className="mb-6 text-2xl font-sm py-1 px-5 rounded-xl border border-black" id="password" type="password" name="password" onChange={handleChange} value={password} required />

            <button className="bg-yellow-300 shadow-4x1 rounded-xl border border-solid border-black hover:border-yellow-300 hover:bg-green-500 focus:border-yellow-300 focus:bg-green-500 text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300 active:bg-red-500 py-1 px-5" type="submit">Register</button>

        </form>
    )
}

export default Registration;