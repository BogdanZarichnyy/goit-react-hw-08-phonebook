// import { lazy } from 'react';
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppBar } from "./AppBar/AppBar";
import { Home } from "pages/Home/Home";
import { Contacts } from "pages/Contacts/Contacts";
import { Login } from "pages/Login/Login";
import { Registration } from "pages/Registration/Registration";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";

// const AppBar = lazy(() => import('./AppBar/AppBar'));
// const Home = lazy(() => import('../pages/Home/Home'));
// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
// const Login = lazy(() => import('../pages/Login/Login'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

import { selectIsLoggedIn, selectUserToken } from "redux/authorization/selectorsAuth";
import { getCurrentUserInfoThunk } from "redux/authorization/thunksAuth";

export const App = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const usertoken = useSelector(selectUserToken);

    useEffect(() => {
        if (!isLoggedIn && usertoken) {
            dispatch(getCurrentUserInfoThunk());
        }
    }, [isLoggedIn, usertoken, dispatch]);

    return (
        <Routes>
            <Route path="/" element={<AppBar />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Registration />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}