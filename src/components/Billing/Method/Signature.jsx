import React from 'react'

const Signature = () => {
  return (
    <div className='fields'>
        <div>

        <label htmlFor="freq">Frequência da cobrança</label>
        <select name="freq" id="freq">
            <option value="monthly" defaultValue={true}>Mensal</option>
            <option value="quarterly">Trimestral</option>
            <option value="semester">Semestral</option>
            <option value="yearly">Anual</option>
        </select>
        </div>
        <div>

        <label htmlFor="date">Vencimento da 1° cobrança</label>
        <input type="date" name="date" id="date" />
        </div>
        <div>

        <label htmlFor="end">Fim de assinatura <b style={{fontWeight: "400"}}>(Opcional)</b></label>
        <select name="end" id="end">
            <option value="0" defaultValue={true}>Sem data definida</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
        </select>
        </div>
    </div>
  )
}




export default Signature