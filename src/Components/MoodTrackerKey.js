import React from 'react'


class MoodTrackerKey extends React.Component{
    render(){
        return(
            <div className="mood-tracker-key" >
                {/* <h3 style={{display: "flex", justifyContent: "center",alignItems: "center"}}>Key</h3> */}
                
                <div className="key-container">
                    <div className="key-child">
                        <div className="pink-key">
                            <div className="pink-square"> </div>
                            <p className="pink-text">joyful, happy, relaxed, silly, content, great</p>
                        </div>

                        <div className="blue-key">
                            <div className="blue-square"> </div>
                            <p className="blue-text">sad, lonely, depressed, insecure, numb</p>
                        </div>

                        <div className="green-key">
                            <div className="green-square"> </div>
                            <p className="green-text">productive, energetic, active, motivated, alive</p>
                        </div>
                    </div>

                    <div className="key-child">
                        <div className="yellow-key">
                            <div className="yellow-square"> </div>
                            <p className="yellow-text">sick, tired, lazy, unmotivated, bored, dull</p>
                        </div>

                        <div className="orange-key">
                            <div className="orange-square"> </div>
                            <p className="orange-text">average, normal, uneventful, good, okay</p>
                        </div>

                        <div className="red-key">
                            <div className="red-square"> </div>
                            <p className="red-text">angry, anxious, frustrated, annoyed, grumpy</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MoodTrackerKey