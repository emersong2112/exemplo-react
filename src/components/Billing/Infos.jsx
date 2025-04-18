import InputMask from 'react-input-mask';

// ...

function Infos() {
    // ...

    return (
        <div>
            <InputMask mask="99/99/9999" value={data} onChange={handleDataChange}>
                {(inputProps) => <input {...inputProps} type="text" />}
            </InputMask>
            {/* Outros campos e conteúdo do componente */}
        </div>
    );
}

export default Infos;