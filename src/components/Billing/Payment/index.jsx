import React from 'react';
import Expanded from '../../general/Expanded';
import './style.scss';

const Payment = () => {
  return (
    <article className="payment">
      <h2>COMO SEU CLIENTE PODERÁ PAGAR?</h2>
      <Expanded
        title="Boleto Bancário"
        subtitle="Valor líquido por parcela: R$148,01"
      >
        <>
          <p>
            Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o
            pagamento.
          </p>
          <p>
            Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o
            pagamento.
          </p>
        </>
      </Expanded>
      <Expanded title="Pix" subtitle="Valor líquido por parcela: R$148,01">
        <>
          <p>
            Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o
            pagamento.
          </p>
          <p>
            Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o
            pagamento.
          </p>
        </>
      </Expanded>
      <Expanded
        title="Cartão de Crédito"
        subtitle="Valor líquido por parcela: R$145,03"
      >
        <>
          <p>
            Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o
            pagamento.
          </p>
          <p>
            Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o
            pagamento.
          </p>
        </>
      </Expanded>
    </article>
  );
};

export default Payment;
