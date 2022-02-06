import React, { Component } from 'react';
import { SubHeader  } from '../../components/SubHeader/SubHeader';
import header from '../../res/header.png';
import './Header.css';

class Header extends Component {

    render() {

        return(

            <div className='app__header app__wrap section' id='home'>

                <div className='app__wrap-infor'>
                    <SubHeader title='W pogoni za nowym smakiem'/>
                    <h1 className='app__header-title'>Klucz do pysznego azjatyckiego posiłku</h1>
                    <p className='text' style={ { margin: '2rem 0' } }>Wyjątkowe, aromatyczne dania autentycznej, wietnamskiej kuchni z legendarną zupą Pho na czele. Azjatyckie smaki w samym sercu Krakowa.</p>
                    <button type='button' className='btn'>Poznaj Menu</button>
                </div>

                <div className='app__wrap-img'>
                    <img src={ header } alt='logo'/>
                </div>
                
            </div>

        );

    };

};

export default Header;
