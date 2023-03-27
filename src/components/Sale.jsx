import React from 'react'
import office from '../assets/img/office.jpg'
import office2 from '../assets/img/office2.jpg'

export function Sale() {
  return (
    <>
    <section className='container sale'>
      <div className='sale-container'>
        <img src={office} alt="" />
        <div className='sale-description'>
          <span >PRECIO INICIAL</span>
          <p className='sale-title'>Obtén un 25 % de descuento en el plan WeWork All Access Plus con esta oferta especial</p>
          <p className='sale-des'>Accede a espacios de trabajo cerca de ti con un descuento del 25 % en la cuota del plan de membresía mensual Plus de WeWork All Access durante 5 meses. Se aplican términos y condiciones.
          </p>
          <a href="">Obtén más información </a>
        </div>
      </div>
    </section>
    <section className='container sale2'>
      <div className='sale-container'>
        <img src={office2} alt="" />
        <div className='sale-description'>
          <p className='sale-title'>Soluciones para empresas de todos los tamaños</p>
          <div className='sale-buttons'>
            <button>Para particulares/equipos pequeños</button>
            <button>Para empresas medianas/grandes</button>
          </div>
          <p className='sale-des'>Membresías flexibles y oficinas llave en mano que se adaptan a todos los presupuestos y estrategias híbridas. Encuentra espacio para concentrarte y colaborar en cientos de ubicaciones cerca de tu casa o en diferentes partes del mundo.
          </p>
          <a href="">Obtén más información </a>
        </div>
      </div>
    </section>
    </>
  )
}
