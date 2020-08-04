import { useState } from 'react';

function useForm (valoresIniciais) {

    const [values, setValues] = useState(valoresIniciais);

    function setValue (chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleError(evento) {
        setValue (
        evento.target.getAttribute('name'), 
        evento.target.value,
        );
    }

    function clear(){
        setValues(valoresIniciais);
    }
    
    return{
        values,
        handleError,
        clear,
    }
}

export default useForm;
