import React from 'react'

const joyful = require('../images/joyful.png')

class MoodTrackerForm extends React.Component{

    state = {
        mood: "pink",
        user_id: 1
    }

    changeHandler = (e) => {
        this.setState({ mood:e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.updateMood(this.state)
    }


    render(){
        return(
            <div className="mood-tracker-form">
                <h2>Today I am feeling ...</h2>
                <form onSubmit={this.submitHandler}>
                <select onChange={this.changeHandler}>
                    <option class="line1" value="pink" >Pink</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                </select>
                <div className="mood-form-button" >
                    <input class='mood-form-btn' type="submit" value= "SUBMIT" />
                </div>
                </form>
            </div>
        )
    }
}

export default MoodTrackerForm


