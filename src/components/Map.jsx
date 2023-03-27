import React from 'react'
import map from '../assets/img/map.jpg'


export function Map() {
  return (
    <section className='map'>
        <div className='container map-container'>
        <div className='map-description'>
            <span>RED GLOBAL</span>
            <p className='map-title'>Espacio de trabajo dónde y cuándo lo necesites</p>
            <p className='map-des'>Con más de 700 ubicaciones en todo el mundo, los equipos pueden trabajar mejor en más lugares, ya sea cerca de casa, en múltiples espacios de trabajo o en una oficina central</p>
            <a href="">Explora las ubicaciones</a>
        </div>
        <img src={map} alt="" />
        </div>
  </section>
  )
}
