import React, { useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao:'',
        cor: '',
    };
    
    const [categorias, setCategorias] = useState([]);
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

    return(
        <PageDefault>
            <h1>Cadastro da categoria: {values.nome} </h1>
                 
            <form onSubmit={function hendleSubmit(evento) {
                evento.preventDefault();
                setCategorias([
                    ...categorias,
                    values,
                ]);

                setValues(valoresIniciais)
            }} >

                <FormField 
                    label = "Nome da categoria:"
                    type = "text"
                    name = "nome"
                    value = {values.nome}
                    onChange = {handleError}
                />

                <FormField 
                label = "Cor:"
                type = "color"
                name = "cor"
                value = {values.cor}
                onChange = {handleError}
                />



                <Button>
                    Cadastrar
                </Button>
            </form>
     
            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.nome}`}>
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