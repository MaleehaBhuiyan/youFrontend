import React from 'react'
import Report from './Report'

class MoodMessage extends React.Component{

    clickHandler = () => {
        this.props.messageHandler() 
    }

    render(){
        return(
            <div className="mood-analytics-option" >
                <h3>Your mood has been recorded on your chart! </h3> 
                <h4>Click the report button to see your Mood Analysis</h4>
                <div className="report-form-button" >
                    <button class='report-form-btn' onClick={this.clickHandler}>REPORT</button>
                </div>
            </div>
        )
    }
}

export default MoodMessage