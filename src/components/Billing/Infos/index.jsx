import React from 'react';
import InputMoney from '../../general/Inputs/InputMoney';
import './style.scss';
const Infos = () => {
    
  return (
    <article className='infos'>
        <h2>O que cobrar?</h2>
        
        <div style={{maxWidth:"200px"}}>
            <span>Valor da cobrança</span>
            <InputMoney />
        </div>
        
        <div>
            <span>Descrição da cobrança <b style={{fontWeight: "400"}}>(Opcional)</b> </span>
            <textarea name="description" id="desc" resiz placeholder='A descrição informada será impressa na fatura.' />
        </div>

    </article>
  )
}

export default Infos