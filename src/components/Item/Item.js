import React from 'react';
import './Item.css';

export const Item = ({ title, price, tag }) => {

    return(

        <div className='app__Item'>

            <div className='app__Item-head'>

                <div className='app__Item-name'>
                    <p className='comcard' style={ { color: '#d4af37' } }>{ title }</p>
                </div>

                <div className='app__Item-dash'/>

                <div className='app__Item-price'>
                    <p className='comcard'>{ price }</p>
                </div>

            </div>

            <div className='app__Item-sub'>
                <p className='text' style={ { color: '#636363'} }>{ tag }</p>
            </div>

        </div>

    );

};
