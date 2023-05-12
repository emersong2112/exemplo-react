import React from 'react'

// não enviei o valor total para calcular as parcelas, porque a título de exemplo, não é necessário
const Single = () => {
  return (
    <div className='fields'>
      <div>

        <label htmlFor="freq">Parcelamento</label>
        <select name="freq" id="freq">
            <option value="1" defaultValue={true}>À vista(R$ 150,00)</option>
            <option value="2">Em 2 vezes</option>
            <option value="3">Em 3 vezes</option>
            <option value="4">Em 4 vezes</option>
        </select>
      </div>
      <div>
        <label htmlFor="date">Vencimento da cobrança</label>
        <input type="date" name="date" id="date" />
      </div>
    </div>
  )
}

export default Single