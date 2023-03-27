import React from 'react'
import { MainFirstSection } from './MainFirstSection'
import { Sale } from './Sale'
import { Form } from './Form'
import { Map } from './Map'
import { Branch } from './Branch'
import { Tendencia } from './Tendencia'
import { TendenCards } from './TendenCards'
import { Footer } from './Footer'

export function Main() {

  return (
    <main>
        <MainFirstSection />
        <Sale />
        <Form />
        <Map />
        <Branch />
        <Tendencia />
        <TendenCards />
        <Footer />
  </main>
  )
}
