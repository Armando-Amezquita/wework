import React from 'react'
import { cardsList } from '../assets/js'
import { Cards } from './Cards'
import home from '../assets/img/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg'

export function MainFirstSection() {
  return (
    <>
        <section>
            <div className='home-images'>
                <img src={home} alt="" />
            </div>
            <div className='home-description'>
                <h1>Para todas tus formas de trabajo, <br /> estamos aquí</h1>
                <p>            
                Encuentra una ubicación cerca de ti. Explora las membresías y las oficinas listas para mudarse para particulares o empresas de todos los tamaños.
                </p>
                <select name="" id="">
                <option value="">Medellin</option>
                <option value="">Bogota</option>
                </select>
                <button>Comenzar</button>
            </div>
        </section>
    <section className='look container'>
      <div className='look-description-title'>
        <h2>¿Qué estás buscando?</h2>
        <a href="">Ver todas las soluciones</a>
      </div>
      <div className='look-cards'>
        {
            cardsList.map(card => (
                <Cards key={card.id} img={card.img} title={card.title} subtitle={card.subtitle}            content={card.content} />
            ))
        }
      </div>
    </section>
    </>
  )
}

