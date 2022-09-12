import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import BlockTitle from '../BlockTitle/BlockTitle.js';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main () {
    return (
        <main className="content">
            <Promo />
            <AboutProject>
                <BlockTitle
                    title={'О проекте'}
                />
            </AboutProject>
            <Techs>
                <BlockTitle
                    title={'Технологии'}
                />
            </Techs>
            <AboutMe>
                <BlockTitle
                    title={'Студент'}
                />
            </AboutMe>
        </main>
    )
}

export default Main;