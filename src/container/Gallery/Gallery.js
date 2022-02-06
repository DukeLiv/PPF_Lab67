import React, { useRef } from 'react';
import { SubHeader } from '../../components/SubHeader/SubHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookSquare } from 'react-icons/fa';
import gallery1 from '../../res/gallery1.png';
import gallery2 from '../../res/gallery2.png';
import gallery3 from '../../res/gallery3.png';
import gallery4 from '../../res/gallery4.png';
import './Gallery.css';

function Gallery() {

    const scrollRef = useRef(null);
    const scroll = (direction) => {

        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        };

    };

    return(

        <div className='app__Gallery flex' id='gallery'>

            <div className='app__Gallery-content'>
                <SubHeader title='Facebook'/>
                <h1 className='headtext'>Galeria</h1>
                <button type='button' className='btn'>Zobasz więcej</button>
            </div>

            <div className='app__Gallery-img'>
                
                <div className='app__Gallery-img-container' ref={ scrollRef }>

                    { [gallery1, gallery2, gallery3, gallery4].map((image, index) => (
                    <div className='app__Gallery-img-card flex' key={ `Gallery-img-${ index + 1}` }>
                        <img src={ image } alt='logo'/>
                        <FaFacebookSquare className='app__Gallery-img-icon'/>
                    </div>
                    )) }

                </div>

                <div className='app__Gallery-img-arrow'>
                    <FontAwesomeIcon icon={ faArrowLeft } className='app__Gallery-arrow' onClick={ () => scroll('left') }/>
                    <FontAwesomeIcon icon={ faArrowRight } className='app__Gallery-arrow' onClick={ () => scroll('right') }/>
                </div>
                
            </div>

        </div>

    );

};

export default Gallery;
