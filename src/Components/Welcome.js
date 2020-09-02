import React from 'react'
import Signup from './Signup'
import Login from './Login'


const airplaneGirl = require('../images/airplaneGirl.gif')


class Welcome extends React.Component{
    render(){
        return(
            <div className="signed-out">
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>You are now Signed Out</h1>
                <img src={airplaneGirl} alt="loading..." width="400"  />
            </div>
        )
    }
}

export default Welcome