import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo(){
    const history = useHistory();

    const {handleError, values} = useForm({
        titulo: '',
        url: '',
        categoria: '',
    });

    return(
        <PageDefault>
            <h1>
            Pagina de cadastro de video
            </h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                history.push('/');
            }}>

            <FormField
                    label = "Título do vídeo:"
                    type = "text"
                    name = "titulo"
                    value = {values.titulo}
                    onChange = {handleError}
            />

            <FormField
                    label = "URL:"
                    type = "text"
                    name = "url"
                    value = {values.url}
                    onChange = {handleError}
            />

            <FormField
                    label = "Categoria:"
                    type = "text"
                    name = "categoria"
                    value = {values.categoria}
                    onChange = {handleError}
            />  

            </form>

            <div>
            <Button type="submit">
                    Cadastrar
            </Button>
            </div>

            <Button as={Link} className="ButtonLink" Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Button>
        </PageDefault>
    )
}

export default CadastroVideo;