import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Welcome from './Components/Welcome'
import Home from './Components/Home'
import JournalContainer from './Containers/JournalContainer'




class App extends React.Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/welcome" render={() => <Welcome />} />
            <Route path="/home" render={() => <Home />} />
            <Route path="/journal" render={() => <JournalContainer />} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
