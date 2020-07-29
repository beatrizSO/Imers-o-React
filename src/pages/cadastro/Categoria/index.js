import React, { useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao:'',
        cor: '',
    }
    
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue (chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleError(evento) {
        const {getAttribute, value} = evento.target;
        setValue (
        getAttribute('name'), 
        value
        );
    }

    return(
        <PageDefault>
            <h1>Cadastro da categoria: {values.nome} </h1>
                 
            <form onSubmit={function hendleSubmit(evento) {
                evento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

                <FormField 
                    label = "Nome da categoria:"
                    type = "text"
                    name = "nome"
                    value = {values.nome}
                    onChange = {handleError}
                />

                <div>

                <FormField 
                    label = "Descrição:"
                    type = "text"
                    name = "descricao"
                    value = {values.descricao}
                    onChange = {handleError}
                />

                    <label>
                        Descrição:
                        <textarea 
                            type = "text"
                            value = {values.descricao}
                            name = "descricao"
                            onChange = {handleError}
                        />
                    </label>

                    <FormField 
                    label = "Cor:"
                    type = "color"
                    name = "cor"
                    value = {values.cor}
                    onChange = {handleError}
                    />

                </div>


                <button>
                    Cadastrar
                </button>
            </form>
     
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
               Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;