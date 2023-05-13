import React from 'react';
import './style.scss';
const InputMoney = () => {
  const moneyFormmating = (e) => {
    const value = e.target.value;
    const money = value.replace(/\D/g, ''); // Aqui estou removendo tudo que não for número
    const moneyFormmated = money.replace(/(\d)(\d{2})$/, '$1,$2'); // Aqui estou adicionando a vírgula e os centavos
    e.target.value = moneyFormmated;
  };
  return (
    <div className="input-money">
      <label htmlFor="money">R$</label>
      <input
        type="text"
        id="money"
        placeholder="0,00"
        onChange={moneyFormmating}
      />
    </div>
  );
};

export default InputMoney;
