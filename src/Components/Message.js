import React from 'react'

const lighterGirl = require('../images/lighterGirl.gif')

function Message(){
    return(
        <div className="message">
            <h1>Today's entry is complete!</h1>
            <h2>Click on a previous day to view happy thoughts and memories created by YOU ❤</h2>
            <div>
                <img src={lighterGirl} alt="loading..." width="400"  />
                            
            </div>
        </div>
    )
}

export default Message