import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {

    //activeClassName='nav_list_item_active'
    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className='nav_list_item'>
                    <NavLink  to='/' className={({isActive}) => isActive?"nav_list_item_active":""}  >
                        Accueil
                    </NavLink>
                </li>
                <li className='nav_list_item'>
                    <NavLink to='/about' className={({isActive}) => isActive?"nav_list_item_active":""}>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
