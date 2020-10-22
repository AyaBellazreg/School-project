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
              <Link to = "/courses" className = 'navLink' >Les cours</Link>
              <Link to = "/" className ='navLink' >Acceuil</Link>
            </div>
        </div>
    )
}

export default NavBar
