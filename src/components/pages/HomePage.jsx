import React from 'react'
import './homePage.css';
import NavBar from '../navBar/NavBar';
import heroImage from '../../img/hero.svg';
import quiSommes from '../../img/qui-sommes.jpg';
import {Link} from 'react-router-dom';
function HomePage() {
    return (
        <div>
            <NavBar />
            <div className = 'section' > 
                <header>
                    <div className="intro">
                        <h1>Lorem ipsum dolor</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab voluptas, eos illo est veritatis eligendi, suscipit amet excepturi porro laudantium voluptatem.</p>
                        <Link to="/courses" class="btn btn-red">Accéder Au Cours</Link>
                    </div>
                    <div className="hero-img">
                        <img src={heroImage} alt="online-courses"/>
                        <div className="clip-path"></div>
                    </div>
                </header>

                <div className="section quiSommes">
                    <div className="box">
                        <h2>Qui Sommes-nous?</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum minus ipsa in facere cumque laudantium quod cum voluptatum excepturi officia.</p>
                        <Link to="/" className="btn btn-purple">School Tour</Link>
                    </div>
                    <div className="box">
                            <img src={quiSommes} />
                    </div>
                </div>
        
                    <div className="section gallery">
                        gallery of images/slide show
                    </div>
            </div>
        </div>
    )
}

export default HomePage
