import React from 'react';
import ItemOption from './ItemOption';
import './style.scss';
const Options = ({ onChangeDocuments }) => {
  return (
    <aside className="options">
      <h2>Opções adicionais</h2>
      <ul>
        <ItemOption
          title="Inserir documentos e arquivos"
          description="Deseja adicionar documentos para o seu cliente visualizar e baixar quando receber esta cobrança"
          onChange={onChangeDocuments}
        />
        <ItemOption
          title="Emitir nota fiscal de serviço"
          description="Você deseja emitir uma nota fiscal de serviço vinculado a esta cobrança?"
        />
      </ul>
    </aside>
  );
};

export default Options;
