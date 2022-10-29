import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, selectUserEmail, selectIsLoggedIn, selectUserToken } from 'redux/authorization/selectorsAuth';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import { getContactsThunk } from 'redux/contacts/thunksContacts';

export const Home = () => { 
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
            <p>Home page</p>

            {isLoggedIn &&
                <>
                    <p>Welcome {userName}</p>
                    <p>Your's E-mail address: {userEmail}</p>
                    <p>Your's contacts in database: {userContacts.length}</p>
                </>
            }

        </>
    )
}