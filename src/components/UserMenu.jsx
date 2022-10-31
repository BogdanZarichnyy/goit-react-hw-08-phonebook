import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectUserName } from 'redux/authorization/selectorsAuth';
import { logOutThunk } from 'redux/authorization/thunksAuth';

export const UserMenu = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const location = useNavigate();

    const handleLogout = () => {
        dispatch(logOutThunk());
        location('/login');
    }

    return (
        <div className="flex gap-3 items-center">
            <span className="text-2xl font-medium text-red-600 mr-5">{userName}</span>

            <button className="bg-yellow-300 shadow-4x1 rounded-xl border border-solid border-black hover:border-yellow-300 hover:bg-green-500 focus:border-yellow-300 focus:bg-green-500 text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300 active:bg-red-500 py-1 px-5" type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}