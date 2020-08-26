import React from 'react'

class JournalForm extends React.Component{

    state = {
        gratefulItemOne: "",
        gratefulItemTwo: "",
        gratefulItemThree: "",
        todayGreatOne: "",
        todayGreatTwo: "",
        todayGreatThree: "",
        dailyAffirmation: ""

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]:e.target.value }) 
    }

    render(){
        return(
            <div className="journal-form-container" >
                <form>
                    
                    <h3 style={{display: "flex", justifyContent: "center",alignItems: "center"}}>I am grateful for</h3>
                    
                    <fieldset>
                        1. <input type="text" name="gratefulItemOne" value={this.state.gratefulItemOne} onChange={this.changeHandler} />
                    </fieldset>
                    
                    <fieldset>
                        2. <input type="text" name="gratefulItemTwo" value={this.state.gratefulItemTwo} onChange={this.changeHandler} />
                    </fieldset>
                    
                    <fieldset>
                        3. <input type="text" name="gratefulItemThree" value={this.state.gratefulItemThree} onChange={this.changeHandler} />
                    </fieldset>
                    

                    <h3 style={{display: "flex", justifyContent: "center",alignItems: "center"}}>What will I do to make today great?</h3>

                    <fieldset>
                        1. <input type="text" name="todayGreatOne" value={this.state.todayGreatOne} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset>
                        2. <input type="text" name="todayGreatTwo" value={this.state.todayGreatTwo} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset>
                        3. <input type="text" name="todayGreatThree" value={this.state.todayGreatThree} onChange={this.changeHandler} />
                    </fieldset>


                    <h3 style={{display: "flex", justifyContent: "center",alignItems: "center"}} >Daily Affirmations. I am...</h3>
                    
                    <fieldset>
                        <input type="text" value={this.state.dailyAffirmation} onChange={this.changeHandler} />
                    </fieldset>
                    
                    <fieldset>
                        <input type="submit" value="Complete Entry"/>
                    
                    </fieldset>
                
                </form>
            </div>
        )
    }
}

export default JournalForm