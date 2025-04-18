import InputMask from 'react-input-mask';

// ...

function Payment() {
    // ...

    return (
        <div>
            <InputMask mask="R$ 999,99" value={valor} onChange={handleValorChange}>
                {(inputProps) => <input {...inputProps} type="text" />}
            </InputMask>
            {/* Outros campos e conteúdo do componente */}
        </div>
    );
}

export default Payment;