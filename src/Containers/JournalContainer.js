import React from 'react'
import Calendar from '../Components/Calendar'


const style = {
    position: "relative",
    margin: "50px auto"
  }

class JournalContainer extends React.Component{
    render(){
        return(
        <div>
            <Calendar style={style} width="302px" />  
        </div>
        )
    }
}

export default JournalContainer