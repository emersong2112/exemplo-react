import React from 'react';
import { useFormContext } from 'react-hook-form';
import ItemOption from './ItemOption';
import './style.scss';

const Options = () => {
  const { register } = useFormContext();

  return (
    <aside className="options">
      <h2>Opções adicionais</h2>
      <ul>
        <li>
          <input
            type="checkbox"
            id="useDocuments"
            {...register('useDocuments')}
          />
          <label htmlFor="useDocuments">
            <strong>Inserir documentos e arquivos</strong> - Deseja adicionar
            documentos para o seu cliente visualizar e baixar quando receber
            esta cobrança
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="issueInvoice"
            {...register('issueInvoice')}
          />
          <label htmlFor="issueInvoice">
            <strong>Emitir nota fiscal de serviço</strong> - Você deseja emitir uma
            nota fiscal de serviço vinculado a esta cobrança?
          </label>
        </li>
      </ul>
    </aside>
  );
};

export default Options;
