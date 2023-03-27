import React from 'react'

export function Form() {
  return (
    <section className='container '>
    <div className='section-form'>
      <form className='form'>
        <p className='form-title'>Te ayudamos a encontrar tu espacio de trabajo ideal</p>
        <p className='form-description'>Completa el formulario y un miembro del equipo de WeWork se pondrá en contacto contigo a la brevedad.</p>
        <div className='form-information'>
          <div className='form-input'>
            <div>
              <label htmlFor=""></label>
              <input className='input-form' type="text" placeholder='Nombre completo' />
            </div>
            <div>
              <label htmlFor=""></label>
              <input className='input-form' type="text" placeholder='Correo electronico' />
            </div>
          </div>
          <div className='form-input'>
            <div>
              <label htmlFor=""></label>
              <input className='input-form' type="text" placeholder='Nombre de la empresa' />
            </div>
            <div>
              <label htmlFor=""></label>
              <input className='input-form' type="text" placeholder='Numero de telefono' />
            </div>
          </div>
          <div className='form-input'>
            <div>
              <select name="" id="">
                <option value="">Bogota</option>
                <option value="">Medellin</option>
              </select>
            </div>
            <div>
              <label htmlFor=""></label>
              <input className='input-form' type="text" placeholder='¿Cuantas personas necesitan espacio' />
            </div>

          </div>
        </div>
        <span className='form-politi'>
        Al hacer clic en el botón a continuación, aceptas nuestras <a href=""> Condiciones de servicio </a> y nuestra <a href=""> Política de privacidad global </a>.
        </span>
        <button type='button' className='form-send'>Enviar</button>
      </form>
    </div>
  </section>
  )
}
