import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {Listarticle} from './components/ListArticle';
import {Createarticle} from './components/CreateArticle';
import {Editarticle} from './components/EditArticle';
import {Detailarticle} from './components/DetailArticle';
import FormHome from "./components/FormHome";
import { GlobalProvider } from './components/reducers/GlobalContext';
function App() {
  return (
    <GlobalProvider>
       <header className="text-center"><h5>Pintereach</h5></header>
       <Switch>
        <Route path="/" component={Listarticle} exact/>
        <Route path="/create" component={Createarticle} exact/>
        <Route path="/edit/:id" component={Editarticle} exact/>
        <Route path="/detail/:id" component={Detailarticle} exact/>
      </Switch>
    </GlobalProvider>
  );
}
export default App;