import React from 'react';
import sub from '../../res/sub.png';

export const SubHeader = ({ title }) => {

    return(

        <div style={ { marginBottom: '1rem' } }>
            <p className='comcard'>{ title }</p>
            <img src={ sub } alt='logo' className='sub-img'/>
        </div>

    );

};
