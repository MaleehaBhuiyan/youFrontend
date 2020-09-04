import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.js'

import Welcome from './Components/Welcome'
import Home from './Components/Home'
import JournalContainer from './Containers/JournalContainer'
import MoodTrackerContainer from './Containers/MoodTrackerContainer'
import Signup from './Components/Signup.js'
import Login from './Components/Login.js'


class App extends React.Component{

  state = {
    user: null
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token){
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`},
      })
      .then(resp => resp.json())
      .then(data => this.setState({user: data.user}))
    }
  }

  signupHandler = (userObj) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(resp => resp.json())
    .then(data => this.setState({ user: data.user }))
  }

  loginHandler = (userInfo) => {
    console.log("loging in", userInfo)
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ user: data.user }, () => this.props.history.push("/home"))

    })
    // , () => this.props.history.push("/home")
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.setState({ user:null })
  }

  render(){
    return(
      <>
       
          <Navbar user={this.state.user} clickHandler={this.logOutHandler} />
          <Switch>
            <Route path="/login" render={() => <Login submitHandler={this.loginHandler} />} />
            <Route path="/signup" render={() => <Signup submitHandler={this.signupHandler} />} />
            <Route path="/welcome" render={() => <Welcome />} />
            <Route path="/home" render={() => <Home user={this.state.user} />} />
            <Route path="/journal" render={() => <JournalContainer user={this.state.user} />} />
            <Route path="/moodTracker" render={() => <MoodTrackerContainer user={this.state.user} />} />
          </Switch>
       
      </>
    )
  }
}

export default withRouter(App)
