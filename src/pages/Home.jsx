import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, selectUserEmail, selectIsLoggedIn, selectUserToken } from 'redux/authorization/selectorsAuth';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import { getContactsThunk } from 'redux/contacts/thunksContacts';

const Home = () => { 
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userContacts = useSelector(selectContacts);
    const usertoken = useSelector(selectUserToken);

    useEffect(() => {
        if (!isLoggedIn) {
            return;
        }
        dispatch(getContactsThunk());
    }, [isLoggedIn, usertoken, dispatch]);
    
    return (
        <>
            <p className="text-3xl font-bold underline text-center m-5">Welcome</p>

            {isLoggedIn &&
                <div className='rounded-xl border-2 border-solid border-black p-5 bg-green-300'>
                    <p className='py-1 font-sm font-normal text-2xl'>Welcome <span className='font-bold'>{userName}</span></p>
                    <p className='py-1 font-sm font-normal text-2xl'>Your's E-mail address: <span className='font-bold'>{userEmail}</span></p>
                    <p className='py-1 font-sm font-normal text-2xl'>Your's contacts in database: <span className='font-bold'>{userContacts.length}</span></p>
                </div>
            }

        </>
    )
}

export default Home;