import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Page404 = () => (
  <h1>
    NOT FOUND - 404
  </h1>
)
    
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
