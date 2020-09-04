import React from 'react'
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
        <div>
            <nav id="navbar" class="">
            <div class="nav-wrapper">
            
                <div class="logo">

                <a href="#home"><i class="fa fa-angellist"></i> Y❤U</a>
                </div>

            
                <ul id="menu">
                <li><NavLink to="/home" exact>Home</NavLink></li>
                <li><NavLink to="/journal" exact>Journal</NavLink></li>
                <li><NavLink to="/moodTracker" exact>Mood Tracker</NavLink></li>
                {this.props.user ? 
                  <li><NavLink to="/welcome">
                    <li onClick={this.props.clickHandler}>Log Out</li>
                  </NavLink></li>
                  :
                  <li><NavLink to="/login">
                    <li>Login</li>
                  </NavLink></li>
                }
                </ul>
            </div>
            </nav>



            {/* <div class="menuIcon">
            <span class="icon icon-bars"></span>
            <span class="icon icon-bars overlay"></span>
            </div>


            <div class="overlay-menu">
            <ul id="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div> */}
        </div>
    )
  }
}

export default Navbar;