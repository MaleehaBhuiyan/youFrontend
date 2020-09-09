import React from 'react'
import {Redirect, Link} from 'react-router-dom'


const moodGraph = require('../images/moodGraph.png')

class MoodAnalytics extends React.Component{
    render(){
        return(
            <div className="mood-analytics">
                <h1>Mood Analytics</h1>
                <div className="moodGraph">
                            <img src={moodGraph} width="400" />
                </div>
                <div className="evaluation">
                    <h3>Evaluation:</h3>
                    <p>Most of the time you are in a good mood (~ 73%). Either you are joyful, productive or just feeling normal. But from your mood tracker it seems that when you are feeling down these feelings can last for a period of time.</p>
                </div>
                <div className="mood-tips">
                <h3>Tips to Brighten your Mood:</h3>
                <h4>1-Minute Fixes</h4>
                <ul>
                    <li>
                    Smile: It’s cheesy, but apparently it’s true: The act of smiling really can turn a frown upside down.
                    </li>
                    <li>
                    Eat some chocolate. As if we needed a reason other than delicious: Eating chocolate can make us feel happy.
                    </li>
                </ul>
                <h4>5-Minute Fixes</h4>
                <ul>
                    <li>
                    Do something nice for somebody else: Yep, being nice can help us feel nicer. Small actions—holding the door for the person behind you, sending a quick love text to a partner or friend, or donating ten bucks to a favorite charity—count, so there’s no excuse not to get your nice on.
                    </li>
                    <li>
                    Go somewhere quiet: Even if it’s just the office bathroom, taking a few minutes to sit in a quiet space with no external stimulation can do wonders for a bad mood.
                    </li>
                </ul>
                <h4>10-Minute Fixes</h4>
                <ul>
                    <li>
                    Do some yoga: A few hip openers might be the answer to a brighter day. Think it’s impossible to do yoga in a cubicle or other small work space? Think again.
                    </li>
                    <li>
                    Invite distractions: Step away from worries for a few minutes and get absorbed in something neutral, like folding laundry or washing dishes. The repetitive actions of these everyday chores can help us get present with the here and now: the smell of clean laundry, soapy hands, the grime of meals past disappearing down the drain.
                    </li>
                </ul>
                </div>
                <div className="mood-resources">
                    <h3>Resources: </h3>
                    <ul>
                        <li>
                        <Link target="_blank" to={"//www.sciencedaily.com/releases/2019/03/190327112705.htm"} >A simple strategy to improve your mood in 12 minutes </Link>
                        </li>
                        <li>
                        <Link target="_blank" to={"//https://greatergood.berkeley.edu/article/item/how_a_bad_mood_affects_empathy_in_your_brain"} >How a Bad Mood Affects Empathy in Your Brain</Link>
                        </li>
                        <li>
                        <Link target="_blank" to={"//https://www.businessinsider.com/simple-ways-to-improve-your-mood-according-to-psychologists"} > Here are 25 habits that psychologists have linked with happiness</Link>
                        </li>
                        <li>
                        <Link target="_blank" to={"//https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6456824/"} >Relationship Between Sleep Quality and Mood: Ecological Momentary Assessment Study</Link>
                        </li>
                        <li>
                        <Link target="_blank" to={"//Relationship Between Sleep Quality and Mood: Ecological Momentary Assessment Study"} >Gut feelings: How food affects your mood</Link>
                        </li>
                        <li>
                        <Link target="_blank" to={"//https://zapier.com/blog/morning-moods-and-productivity/"} >How Your Mood in the Morning Affects Your Productivity All Day</Link>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default MoodAnalytics
