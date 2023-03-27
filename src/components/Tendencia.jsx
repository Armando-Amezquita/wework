import React from 'react'
import tenden from '../assets/img/tendencias.jpg'

export function Tendencia() {
  return (
    <section className='tendencia container'>
      <span>IDEAS BY WEWORK</span>
      <div className='tende-title'>
        <p>Tendencias y perspectivas de los espacios de trabajo</p>
        <a href="">Sigue leyendo</a>
      </div>
      <div className='tenden-description-container'>
        <img src={tenden} alt="" />
        <div>
          <span>ESTUDIOS DE INVESTIGACIÓN</span>
          <a className='tenden-title' href="">La importancia de los espacios de oficina flexibles</a>
          <a href="">Una encuesta de Cushman & Wakefield revela que las oficinas flexibles son un componente importante del ecosistema del espacio de trabajo.</a>
        </div>
      </div>
      <hr className='line' />
    </section>
  )
}

