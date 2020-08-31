import React from 'react'
import {Redirect} from 'react-router-dom'

const frameOne = require('../images/frameOne.png')
const frameTwo = require('../images/frameTwo.png')
const frameThree = require('../images/frameThree.png')


class Home extends React.Component{

    render(){
        return(
            <>
                {this.props.user ? 

                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1 style={{display: "flex", justifyContent: "center",alignItems: "center"}}>Welcome User</h1>

                        <figure class="swing">
                            <img className="frames" src={frameOne} width="150" />
                        </figure> 

                        <figure class="swing">
                            <img className="frames" src={frameTwo} width="150" />
                        </figure> 

                        <figure class="swing">
                            <img className="frames" src={frameThree} width="150" />
                        </figure> 

                    </div>
                
                : 
                
                <Redirect to="/welcome" />
                
                }
            </>

        )
    }
}

export default Home




