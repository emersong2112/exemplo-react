import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import InputMoney from '../../general/Inputs/InputMoney';
import './style.scss';

const Infos = () => {
  const { control, register, formState: { errors } } = useFormContext();

  return (
    <article className="infos">
      <h2>O que cobrar?</h2>

      <div style={{ maxWidth: '200px' }}>
        <span>Valor da cobrança</span>
        <Controller
          name="value"
          control={control}
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => <InputMoney {...field} />}
        />
        {errors.value && <p className="error">{errors.value.message}</p>}
      </div>

      <div>
        <span>
          Descrição da cobrança <b style={{ fontWeight: '400' }}>(Opcional)</b>{' '}
        </span>
        <textarea
          {...register('description')}
          id="desc"
          placeholder="A descrição informada será impressa na fatura."
        />
      </div>
    </article>
  );
};

export default Infos;
