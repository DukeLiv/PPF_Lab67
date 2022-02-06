import React, { Component } from 'react';
import { Item } from '../../components/Item/Item';
import { SubHeader } from '../../components/SubHeader/SubHeader';
import data from '../../res/data.js';
import menu from '../../res/menu.png';
import './Menu.css';

class Menu extends Component {

    render() {

        return(

            <div className='app__Menu flex section' id='menu'>

                <div className='app__Menu-title'>
                    <SubHeader title='Menu'/>
                    <h1 className='headtext'>Dzisiejsza oferta specjalna</h1>
                </div>

                <div className='app__Menu-content'>

                    <div className='app__Menu-content-soup flex'>

                        <p className='app__Menu-content-heading'>Zupy Pho</p>

                        <div className='app__Menu-content-item'>
                            { data.soup.map((soup, index) => (<Item key={ soup.title + index } title={ soup.title } price={ soup.price } tag={ soup.tag }/>)) }
                        </div>

                    </div>

                    <div className='app__Menu-img'>
                        <img src={ menu } alt='logo'/>
                    </div>

                    <div className='app__Menu-content-rice flex'>

                        <p className='app__Menu-content-heading'>Dania z ryżem</p>

                        <div className='app__Menu-content-item'>
                            { data.rice.map((rice, index) => (<Item key={ rice.title + index } title={ rice.title } price={ rice.price } tag={ rice.tag }/>)) }
                        </div>

                    </div>

                </div>

                <div style={ { marginTop: 15 } }>
                    <button type='button' className='btn'>Zobasz Więcej</button>
                </div>

            </div>

        );

    };

};

export default Menu;
