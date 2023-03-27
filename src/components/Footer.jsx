import React from 'react'

export function Footer() {
  return (
    <footer className='footer-footer' >
    <div className='footer-up container'>
      <div className='footer-menus'>
        <div>
          <span>
            EMPRESA
          </span>
          <ul>
            <li>Ubicaciones alrededor del mundo</li>
            <li>Misión</li>
            <li>Inclusión y diversidad</li>
            <li>Oportunidades de empleo</li>
            <li>Inversores</li>
            <li>Sala de redacción</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <span>COLABORACIONES</span>
            <li>Brokers</li>
            <li>Propietarios</li>
            <li>Recomiéndanos a alguien</li>
            <li>Planificadores de eventos</li>
          </ul>
        </div>
        <div>
          <ul>
            <span>SOPORTE</span>
            <li>Contacto</li>
            <li>Member Login</li>
            <li>Preguntas frecuentes</li>
            <li>Respuesta ante la COVID-19</li>
          </ul>
        </div>
      </div>
      <div className='footer-social'>
        <div>
          <span>red</span>
          <span>red</span>
          <span>red</span>
          <span>red</span>
        </div>
        <select name="" id="">
          <option value="">Español Latinoamerica</option>
        </select>
      </div>
    </div>
    <div className='footer-down container'>
        <div className='footer-down-left'>
          <a href="">Todas las ubicaciones</a>
          <ul>
            <li>+575087567</li>
            <span>WeWork Companies LLC <br /> 75 Rockefeller Plaza <br /> Floor 10 <br /> New York, New York 10019</span>
          </ul>
        </div>
        <div className='footer-down-rigth'>
          <ul>
            <li>Privacidad</li>
            <li>Términos</li>
            <li>Política de cookies</li>
            <li>Cookies Settings</li>
            <li>Accesibilidad</li>
            <li>Mapa del sitio</li>
          </ul>
          <span>Copyright © 2023 WeWork. Todos los derechos reservados.</span>
        </div>
      </div>
  </footer>
  )
}