import React from 'react';
import { SubHeader } from '../SubHeader/SubHeader';
import './Newsletter.css';

export const Newsletter = () => {

    return(

        <div className='app__Newsletter'>

            <div className='app__Newsletter-header'>
                <SubHeader title='Newslettera'/>
            </div>

            <div className='app__Newsletter-input flex'>
                <input type='email' placeholder='Email'/>
                <button type='button' className='btn'>Zapisz się</button>
            </div>
            
        </div>

    );

};
