import React, { Component } from 'react';
import knife from '../../res/knife.png';
import overlay from '../../res/overlay.png';
import sub from '../../res/sub.png';
import './About.css';

class About extends Component {

    render() {

        return(

            <div className='app__about app__bg flex section' id='about'>

                <div className='app__about-overlay flex '>
                    <img src={ overlay } alt='logo'/>
                </div>

                <div className='app__about-content flex'>

                    <div className='app__about-content-info'>
                        <h1 className='headtext'>O Nas</h1>
                        <img src={ sub } alt='logo' className='sub-img'/>
                        <p className='text'>W naszej karcie znajdą Państwo dania bazujące na świeżych, nieprzetworzonych i niezawierających konserwantów składnikach lokalnych. Dania te podane są w nowoczesnych aranżacjach i nieoczywistych połączeniach smaków. Potrawy przygotowane są z najwyższą starannością, z pełną dbałością o szczegóły i składniki serwowane w kilku odsłonach w czasie jednego kulinarnego doświadczenia.</p>
                        <button type='button' className='btn'>Zobacz</button>
                    </div>

                    <div className='app__about-content-img flex'>
                        <img src={ knife } alt='logo'/>
                    </div>

                    <div className='app__about-content-history'>
                        <h1 className='headtext'>Nasza Historia</h1>
                        <img src={ sub } alt='logo' className='sub-img'/>
                        <p className='text'>Restauracja Wietnamska istnieje od 2019 roku, jedną z naszych specjalności jest Zupa Pho, to najbardziej znana potrawa kuchni wietnamskiej, której popularność wykroczyła daleko poza granice Azji. Ten aromatyczny rosół z dodatkami powstał pod wyraźnym wpływem kolonialnej kuchni francuskiej. Swoją nazwę zawdzięcza makaronowi ryżowemu pho, który stanowi jedną z podstaw tej przepysznej zupy. Kochamy Pho miłością czystą i bezwarunkową.</p>
                        <button type='button' className='btn'>Zobacz</button>
                    </div>

                </div>
                
            </div>

        );

    };

};

export default About;
