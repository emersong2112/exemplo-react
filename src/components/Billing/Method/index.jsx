import React, { useState } from 'react'
import Tabs from '../../general/Tabs'
import Signature from './Signature'
import Single from './Single'
import './style.scss'

const Method = () => {
    const [currentTab, setcurrentTab] = useState(0)
    const methods = [
        {label: 'À vista ou parcelado',
        fields: <Single />},
        {label: 'Assinatura',
      fields: <Signature />},
      ]
  return (
    <article className='payment-method'>
    <h2>QUAL SERÁ A FORMA DE PAGAMENTO?</h2>
    <Tabs currentTab={currentTab} setCurrentTab={setcurrentTab} tabList={methods} />
    <p>O valor será cobrado apenas uma vez, podendo ser parcelado conforme definido abaixo.</p>
    {methods[currentTab].fields}
  </article>
  )
}

export default Method