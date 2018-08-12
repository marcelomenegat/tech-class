import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, HashRouter  } from 'react-router-dom';
import { Switch } from 'react-router';
import App from './App';

import { Template } from './components';
import { ListTutor } from './components';

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const app = document.getElementById('root')
const Root = () => (

    <Template>
      <Router>
        <Switch>
          <Route exact path="/" component={ListTutor} />
          <Route path="/?:filter" component={ListTutor} />          
        </Switch>
      </Router>
    </Template>
  );
  
ReactDOM.render(<Router>
                    <Route exact={true} path="/" component={ Template }/>                                               
                </Router>                
                , app);

registerServiceWorker();
