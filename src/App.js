import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.js'

import Welcome from './Components/Welcome'
import Home from './Components/Home'
import JournalContainer from './Containers/JournalContainer'

const URL = "http://localhost:3000/users"


class App extends React.Component{

  // state = {
  //   users: []
  // }

  // fetchUsers = () => {
  //   fetch(URL)
  //   .then(resp => resp.json())
  //   .then(userData => this.setState({ users:userData }))
  // }

  // componentDidMount(){
  //   this.fetchUsers()
  // }

  


  render(){
    return(
      <>
        <BrowserRouter>
          <Navbar />
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
