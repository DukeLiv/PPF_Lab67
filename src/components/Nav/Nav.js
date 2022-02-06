import React, { useState } from 'react';
import logo from '../../res/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

export const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return(

        <nav className='app__nav'>

            <div className='app__nav-logo'>
                <img src={ logo } alt='logo'/>
            </div>

            <ul className='app__nav-links'>
                <li className='text'><a href='#start'>Start</a></li>
                <li className='text'><a href='#about'>O Nas</a></li>
                <li className='text'><a href='#menu'>Menu</a></li>
                <li className='text'><a href='#gallery'>Galeria</a></li>
                <li className='text'><a href='#contact'>Kontakt</a></li>
            </ul>

            <div className='app__nav-book'>
                <a href='/' className='text'>Zarezerwuj</a>
            </div>

            <div className='app__nav-menu'>

                <FontAwesomeIcon icon={ faBars } color='#ffffff' fontSize={ 25 } onClick={ () => setToggleMenu(true) }/>

                { toggleMenu && (
                    <div className='app__nav-menu-overlay flex slide-bottom'>
                        <FontAwesomeIcon icon={ faUtensils } fontSize={ 25 } className='overlay__close' onClick={ () => setToggleMenu(false) }/>
                        <ul className='app__nav-menu-links'>
                            <li><a href='#start' onClick={ () => setToggleMenu(false) }>Start</a></li>
                            <li><a href='#about' onClick={ () => setToggleMenu(false) }>O Nas</a></li>
                            <li><a href='#menu' onClick={ () => setToggleMenu(false) }>Menu</a></li>
                            <li><a href='#gallery' onClick={ () => setToggleMenu(false) }>Galeria</a></li>
                            <li><a href='#contact' onClick={ () => setToggleMenu(false) }>Kontakt</a></li>
                        </ul>
                    </div>
                )}

            </div>

        </nav>

    );

};
