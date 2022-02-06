import React, { Component } from 'react';
import { SubHeader } from '../../components/SubHeader/SubHeader';
import infor from '../../res/infor.png';

class Infor extends Component {

    render() {

        return(

            <div className='app__bg app__wrap section' id='contact'>

                <div className='app__wrap-infor'>

                    <SubHeader title='Kontakt'/>
                    <h1 className='headtext' style={ { marginBottom: '3rem' } }>Masz pytanie</h1>
                    <div>
                        <p className='text'>Skontaktuj się z nami</p>
                        <p className='comcard' style={ { color: '#d4af37', margin: '2rem 0' } }>Godziny otwarcia</p>
                        <p className='text'>Pn - Cz: 12:00 - 22:00</p>
                        <p className='text'>Pt - Nd: 12:00 - 23:00</p>
                    </div>
                    <button type='button' className='btn' style={ { marginTop: '2rem' } }>Zarezerwuj</button>

                </div>

                <div className='app__wrap-img'>
                    <img src={ infor } alt='logo'/>
                </div>

            </div>

        );

    };

};

export default Infor;
