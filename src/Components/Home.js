import React from 'react'
import {Redirect, Link} from 'react-router-dom'


const frameOne = require('../images/frameOne.png')
const frameTwo = require('../images/frameTwo.png')
const frameThree = require('../images/frameThree.png')
const dreamJar = require('../images/dreamJar.png')
const girlOnTheRoad = require('../images/girlOnTheRoad.png')
const teaGirl = require('../images/teaGirl.gif')



class Home extends React.Component{
    clickHandler = () => {
        console.log("Jar clicked")
    }

    

    render(){
        return(
            <>
                {this.props.user ? 

                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1 style={{display: "flex", justifyContent: "center",alignItems: "center"}}>Welcome {this.props.user.first_name} {this.props.user.last_name}</h1>

                        <div className="dreamJar" onClick={this.clickHandler}>
                            <img src={dreamJar} width="400" />
                        </div>

                        <div className="quote-header">
                            <h2>Tiny Things To Remember:</h2>
                        </div>
                        <div className="home-quote">
                            <h3>"Problems are not stop signs, they are guidelines."</h3>
                        </div>
                        <div className="girlOnTheRoad">
                            <img src={girlOnTheRoad} width="500" />
                        </div>

                        <div className="quote-sayer">
                            <h4>- Robert H. Schiuller</h4>
                        </div>

                        <div className="homePageArticles">
                            <h1>This Week's Top Reads</h1>
                            <ul>
                            <Link target="_blank" to={"//markmanson.net/the-one-rule-for-life"} >1. The One Rule of Life </Link>
                            <br/>
                            <br/>
                            <Link target="_blank" to={"//www.nytimes.com/guides/well/how-to-be-happy"} >2. How to Be Happy </Link>
                            <br/>
                            <br/>
                            <Link target="_blank" to={"//medium.com/@swadeshpadhi/9-sarah-kay-poems-to-share-with-someone-who-gives-you-the-feels-ec591a122b84"} >3. 9 Sarah Kay Poems </Link>
                            <br/>
                            <br/>
                            <Link target="_blank" to={"//www.psychologytoday.com/us/articles/200212/the-power-love"} >4. The Power of Love </Link>
                            <br/>
                            <br/>
                            <Link target="_blank" to={"//greatergood.berkeley.edu/article/item/5_ways_giving_is_good_for_you"} >5. 5 Ways Giving Is Good for You </Link>
                            <br/>
                            <br/>
                            <Link target="_blank" to={"//nytimes.com/2019/02/08/learning/how-do-you-define-family.html"} >6. How Do You Define ‘Family’? </Link>
                            <br/>
                            <br/>
                            <Link target="_blank" to={"//www.newyorker.com/magazine/2017/12/11/cat-person"} >7. Cat Person </Link>
                            <br/>
                            <br/>
                            <Link target="_blank" to={"//www.newyorker.com/magazine/2017/09/04/the-metal-bowl"} >8. The Metal Bowl </Link>
                            <br/>
                            <br/>
                            <Link target="_blank" to={"//thoughtcatalog.com/laura-jane-williams/2015/01/19-astoundingly-insightful-dear-sugar-quotes-that-will-save-your-life/"} >9. 19 Astoundingly Insightful Dear Sugar Quotes That Will Save Your Life </Link>
                            <br/>
                            <br/>
                            <Link target="_blank" to={"//theatlasofbeauty.com"} >10. The Atlas of Beauty </Link>
                            </ul>
                        </div>

                        <br/>
                        <br/>

                        <div>
                            <img src={teaGirl} alt="loading..." width="400"  />
                            
                        </div>

                        <div className="self-care-div">
                            <h2>Self Care Tip of the Day: </h2>

                            <h4>Take care of yourself by taking care of your gut. </h4>

                            <h6>Your gut health can have a significant impact on your health, well-being, and feelings of vitality. 
                                The types of foods you eat crucially impact the bacteria that live in your stomach, resulting in a 
                                cascade of either positive or negative outcomes. Healing the gut can lead to an unhappy person, and vice-versa. </h6>
                        </div>
                        
                        
                    </div>
                
                : 

                
                <Redirect to="/welcome" />
                
                }
            </>

        )
    }
}

export default Home




