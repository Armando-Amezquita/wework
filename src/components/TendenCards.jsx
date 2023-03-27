import React from 'react'
import { tenderCards } from '../assets/js'

export function TendenCards() {
    
  return (
    <section className='container tenden-cards'>
        {
            tenderCards.map( card => (
                <div key={card.id} className='tenden-card'>
                    <img src={card.img} alt="" />
                    <div>
                        <a className='a-span'>{card.title}</a>
                        <a className='tenden-card-title' href="">{card.subtitle}</a>
                        <a className='sub-title' href="">{card.subtitle2}</a>
                    </div>
                </div>
            ))
        }
  </section>
  )
}
