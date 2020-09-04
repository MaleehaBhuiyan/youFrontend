import React from 'react'
import {Redirect} from 'react-router-dom'
import MoodTrackerChart from '../Components/MoodTrackerChart'
import MoodTrackerKey from '../Components/MoodTrackerKey'
import MoodTrackerForm from '../Components/MoodTrackerForm'


const URL = "http://localhost:3000/moods"

class MoodTrackerContainer extends React.Component{

    state = {
        mood: []
    }

    fetchMoods = () => {
        fetch(URL)
        .then(resp => resp.json())
        .then(moodData => this.setState({ mood: moodData }))
    }

    componentDidMount(){
        this.fetchMoods()
    }

    updateMood = (moodObj) => {
        fetch(URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json'
            },
            body: JSON.stringify({ moodInfo: moodObj})
          })
          .then(response => response.json())
          .then(newMood => this.setState({ mood: [...this.state.mood,newMood] }))
    }


    render(){
        return(
            <>
            {this.props.user ? 
                
                <div>
                <h1>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </h1>
                <MoodTrackerChart mood={this.state.mood} />
                <MoodTrackerKey />
                <MoodTrackerForm updateMood={this.updateMood} />
                </div>
                
                :
                
                <Redirect to="/welcome" />
            }
            </>
        )
    }
}

export default MoodTrackerContainer