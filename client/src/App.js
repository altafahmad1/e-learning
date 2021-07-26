import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import WorkArea from './components/WorkArea/WorkArea';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <WorkArea>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
            </WorkArea>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
