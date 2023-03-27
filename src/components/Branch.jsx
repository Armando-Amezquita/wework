import React from 'react'
import { brandList } from '../assets/js'

export function Branch() {
  return (
    <section className='branch container'>
        <div className='branch-description'>
            <p className='branch-description-title'> Empoderamos al mundo del mañana en el trabajo </p>
            <p className='branch-desc'> Durante más de una década, hemos liderado el futuro del trabajo flexible. Desde trabajadores independientes hasta empresas Fortune 500, estamos ayudando a nuestros miembros a reimaginar la forma en que trabajan. </p>
        </div>
        <div className='branch-brand'>
            {
                brandList.map( img => (
                    <div key={img.id}>
                        <img src={img.img} alt="" />
                    </div>
                ))
            }
        </div>
  </section>
  )
}
