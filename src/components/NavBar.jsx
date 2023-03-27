import React from 'react'
import { useRef } from 'react'

export function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

  return (
    <header className='header'>
        <nav className='nav-header container'>
            <ul>
                <li className='logo'>wework</li>
                <li>Encuentra una ubicación</li>
                <li>Soluciones</li>
                <li>Grandes empresas</li>
            </ul>
            <div>
                <button className='contact'>Contacto</button>
                <a href=''>Inicio de sesión de miembros</a>
            </div>
        </nav>
    </header>
  )
}

