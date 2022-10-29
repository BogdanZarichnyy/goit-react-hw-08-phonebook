import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectUserName } from 'redux/authorization/selectorsAuth';
import { logOutThunk } from 'redux/authorization/thunksAuth';

import css from './UserMenu.module.css'

export const UserMenu = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const location = useNavigate();

    const handleLogout = () => {
        dispatch(logOutThunk());
        location('/login');
    }

    return (
        <>
            <span>{userName}</span>

            <button className={css.btn} type="button" onClick={handleLogout}>Logout</button>
        </>
    )
}