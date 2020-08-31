import React from 'react'

const frameOne = require('../images/frameOne.png')
const frameTwo = require('../images/frameTwo.png')
const frameThree = require('../images/frameThree.png')


class Home extends React.Component{

    render(){
        return(
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

                <p class="frame"></p>

            </div>

        )
    }
}

export default Home




