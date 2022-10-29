import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from "react-router-dom";

import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container } from "components/Container/Container";
import { selectIsLoggedIn } from 'redux/authorization/selectorsAuth';

import css from './AppBar.module.css';

export const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className={css.wrraper}>
            <Container>

                <nav className={css.nav}>
                    <ul className={css.list}>

                        <li>
                            <NavLink className={css.item} to='/' end>Home</NavLink>
                        </li>

                        {isLoggedIn &&
                            <li>
                                <NavLink className={css.item} to='/contacts' end>Contacts</NavLink>
                            </li>
                        }

                        {!isLoggedIn &&
                            <>
                                <li>
                                    <NavLink className={css.item} to='/login'>Login</NavLink>
                                </li>
                                <li>
                                    <NavLink className={css.item} to='/register'>Registration</NavLink>
                                </li>
                            </>
                        }

                    </ul>
                </nav>

                {isLoggedIn && <UserMenu />}
                
            </Container>

            <Container>
                <Suspense fallback={<div>Loading data...</div>}>
                    <Outlet />
                </Suspense>
            </Container>

        </div>
    )
}