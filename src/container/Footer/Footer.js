import React, { Component } from 'react';
import { Newsletter } from '../../components/Footer/Newsletter';
import { Overlay } from '../../components/Footer/Overlay';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import logo from '../../res/logo.png';
import './Footer.css';

class Footer extends Component {

    render() {

        return(

            <div className='app__Footer section'>

                <Overlay/>
                <Newsletter/>

                <div className='app__Footer-links'>

                    <div className='app__Footer-links-contact'>
                        <h1 className='app__Footer-header'>Skontaktuj się z nami</h1>
                        <p className='text'>Restauracja Wietnamska</p>
                        <p className='text'>ul. Krupnizca 12, 31-123 Kraków</p>
                        <p className='text'>Telefon: +48 11 222 33 44 / +48 55 666 77 88</p>
                    </div>

                    <div className='app__Footer-links-media'>

                        <img src={ logo } alt='logo'/>
                        <div className='app__Footer-links-icons'>
                            <FaFacebookSquare/>
                            <FaInstagramSquare/>
                            <FaTwitterSquare/>
                        </div>

                    </div>

                    <div className='app__Footer-links-time'>
                        <h1 className='app__Footer-header'>Godziny otwarcia</h1>
                        <p className='text'>Poniedziałek - Czwartek:</p>
                        <p className='text'>12:00 - 22:00</p>
                        <p className='text'>Piątek - Niedziela:</p>
                        <p className='text'>12:00 - 23:00</p>
                    </div>

                </div>

            </div>

        );

    };

};

export default Footer;
