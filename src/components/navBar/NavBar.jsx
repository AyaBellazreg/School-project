import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div className = 'navContainer' >
            <div className = 'logo'  >
                <img src = 'https://www.freelogodesign.org/Content/img/logo-colors-meanings/logos-oranges/logo-fld04.svg' height = '60' width = '200' />
            </div>
            <div className = 'linkContainer' >
              <Link to = "/" className ='navLink' >Acceuil</Link>
              <Link to = "/" className ='navLink' >Qui Sommes-nous?</Link>
              <Link to = "/courses" className = 'navLink' >Les Cours</Link>
            </div>
        </div>
    )
}

export default NavBar
