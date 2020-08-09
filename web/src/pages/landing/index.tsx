import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import { Link } from 'react-router-dom' //substitumos tag a para nao caregar o elemento toda vez que a pag carrega
import './styles.css'
import api from '../../service/api';

function Landing() {

    const [totalConnectios, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div className="container" id="page-landing-content">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">

                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClasses} alt="Dar Aulas" />
                        Ensinar
                    </Link>

                </div>

                <span className="total-connections">
                    Total de {totalConnectios} conexões realizadas
                    <img src={purpleHeartIcon} alt="" />
                </span>

            </div>

        </div >
    )
}

export default Landing;