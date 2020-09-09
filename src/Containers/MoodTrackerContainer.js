import React from 'react'
import {Redirect} from 'react-router-dom'
import MoodTrackerChart from '../Components/MoodTrackerChart'
import MoodTrackerKey from '../Components/MoodTrackerKey'
import MoodTrackerForm from '../Components/MoodTrackerForm'
import MoodMessage from '../Components/MoodMessage'
import MoodAnalytics from '../Components/MoodAnalytics'


const URL = "http://localhost:3000/moods"
const lookingGirl = require('../images/lookingGirl.png')
const sideCloud = require('../images/sideCloud.png')
const fullCloud = require('../images/fullCloud.png')

class MoodTrackerContainer extends React.Component{

    state = {
        mood: [],
        showForm: true,
        showMessage: false,
        showAnalytics: false
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
          this.setState({ showForm:false })
          this.setState({ showMessage: true })
    }

    messageHandler = () => {
        this.setState({ showMessage: false  })
        this.setState({ showAnalytics:true })
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
                {this.state.showForm && <MoodTrackerForm updateMood={this.updateMood} />}
                {this.state.showMessage && <MoodMessage messageHandler={this.messageHandler} />}
                {this.state.showAnalytics && <MoodAnalytics />}

                <div className="lookingGirl">
                            <img src={lookingGirl} width="500" />
                </div>

                <div className="sideCloud">
                            <img src={sideCloud} width="200" />
                </div>

                <div className="fullCloud">
                            <img src={fullCloud} width="300" />
                </div>


                </div>
                
                :
                
                <Redirect to="/welcome" />
            }
            </>
        )
    }
}

export default MoodTrackerContainer