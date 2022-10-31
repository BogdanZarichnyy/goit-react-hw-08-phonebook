import { useSelector } from 'react-redux';
import { NavLink, Outlet } from "react-router-dom";

import { UserMenu } from 'components/UserMenu';
import { Container } from "components/Container";
import { selectIsLoggedIn } from 'redux/authorization/selectorsAuth';

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            <header className="p-50 bg-orange-400 py-3 border-b-2 border-solid border-black">
                <Container>
                    <div className="flex justify-between items-baseline">

                        <nav className="flex items-center">
                            <ul className="flex items-center gap-3">

                                <li className="px-5 py-2">
                                    <NavLink className="text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300" to='/' end>Home</NavLink>
                                </li>

                                {isLoggedIn &&
                                    <li className="px-5 py-2">
                                        <NavLink className="text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300" to='/contacts' end>Contacts</NavLink>
                                    </li>
                                }

                                {!isLoggedIn &&
                                    <>
                                        <li className="px-5 py-2">
                                            <NavLink className="text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300" to='/login'>Login</NavLink>
                                        </li>
                                        <li className="px-5 py-2">
                                            <NavLink className="text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300" to='/register'>Registration</NavLink>
                                        </li>
                                    </>
                                }

                            </ul>
                        </nav>

                        {isLoggedIn && <UserMenu />}

                    </div>
                </Container>
            </header> 
            
            <div className="grow shrink-none basis-auto">
                <Container>
                    <div className='flex flex-col'>
                        <Outlet />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AppBar;