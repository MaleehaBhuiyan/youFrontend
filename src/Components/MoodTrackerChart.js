import React from 'react'
import MoodTrackerContainer from '../Containers/MoodTrackerContainer'

class MoodTrackerChart extends React.Component{

    render(){
        console.log("Mood Obj in MoodTrackerChart: ", this.props.mood[0])
        return(
            <>
            <h1 className="mood-tracker-title">Mood Tracker</h1>
            <div className="grid-container">
                <div className="grid-item"></div>
                <div className="grid-item">J</div>
                <div className="grid-item">F</div>  
                <div className="grid-item">M</div>
                <div className="grid-item">A</div>
                <div className="grid-item">M</div>  
                <div className="grid-item">J</div>
                <div className="grid-item">J</div>
                <div className="grid-item">A</div>  
                <div className="grid-item">S</div>
                <div className="grid-item">O</div>
                <div className="grid-item">N</div>  
                <div className="grid-item">D</div> 

                <div className="grid-item">1</div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="blue"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">2</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="yellow"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">3</div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="yellow"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="yellow"></div>  
                <div className="grid-item" className="blue"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">4</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item" className={this.props.mood[0] ? this.props.mood[0].mood : "highlight" }></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">5</div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="yellow"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="red"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">6</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">7</div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="yellow"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">8</div>
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">9</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">10</div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">11</div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="red"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">12</div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">13</div>
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">14</div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="yellow"></div>  
                <div className="grid-item" ></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">15</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item" className="yellow"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">16</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">17</div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" ></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">18</div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">19</div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="yellow"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">20</div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" ></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">21</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="yellow"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">22</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" ></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">23</div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="orange"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">24</div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">25</div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">26</div>
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">27</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="red"></div>  
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div> 

                <div className="grid-item">28</div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">29</div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="red"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">30</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>

                <div className="grid-item">31</div>
                <div className="grid-item" className="green"></div>
                <div className="grid-item" className="pink"></div>  
                <div className="grid-item" className="orange"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="green"></div>  
                <div className="grid-item" className="blue"></div>
                <div className="grid-item" className="pink"></div>
                <div className="grid-item" className="blue"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>
            </div>
            </>
        )
    }
}

export default MoodTrackerChart