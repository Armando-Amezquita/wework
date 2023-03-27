import React from 'react'

export function Cards({img, title, subtitle, content}) {
  
  return (
    <div className='look-card'>
      <img src={img} alt="" />
      <div>
        <p>{title}</p>
        <span>{subtitle}</span>
        <span className='look-card-people'>{content}</span>
      </div>
    </div>
  )
}
