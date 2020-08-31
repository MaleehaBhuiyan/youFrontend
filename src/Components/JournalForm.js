import React from 'react'

class JournalForm extends React.Component{

    state = {
        great_one: "",
        great_two: "",
        great_three: "",
        today_one: "",
        today_two: "",
        today_three: "",
        daily_affirmation: "",
        date: "August 28, 2020",
        user_id: 1

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]:e.target.value }) 
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.createNewEntry(this.state)
    }

    render(){


        return(
            <div id="wrapper">
    <div id="container">

        <section class="open-book">
            <header>
                <h1>Book Layout</h1>
                <h6>Erin E. Sullivan</h6>
            </header>
            <article>
                <br/>

                <h6 class="chapter-title">August {this.props.today}, 2020</h6>

                <br/>
                <br/>
                <div className="journal-form-container" >
                <form onSubmit={this.submitHandler}>
                    
                    <h3 style={{display: "flex", justifyContent: "center",alignItems: "center"}}>I am grateful for</h3>

                    <br/>
                    
                    <fieldset>
                        1. <input type="text" name="great_one" value={this.state.great_one} onChange={this.changeHandler} />
                    </fieldset>

                    <br/>
                    
                    <fieldset>
                        2. <input type="text" name="great_two" value={this.state.great_two} onChange={this.changeHandler} />
                    </fieldset>

                    <br/>
                    
                    <fieldset>
                        3. <input type="text" name="great_three" value={this.state.great_three} onChange={this.changeHandler} />
                    </fieldset>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div className="next-page">
                        <h3 style={{display: "flex", justifyContent: "center",alignItems: "center"}}>What will I do to make today great?</h3>  

                        <br/>

                        <fieldset>
                            1. <input type="text" name="today_one" value={this.state.today_one} onChange={this.changeHandler} />
                        </fieldset>

                        <br/>

                        <fieldset>
                            2. <input type="text" name="today_two" value={this.state.today_two} onChange={this.changeHandler} />
                        </fieldset>

                        <br/>

                        <fieldset>
                            3. <input type="text" name="today_three" value={this.state.today_three} onChange={this.changeHandler} />
                        </fieldset>

                        <br/>
                        <br/>


                        <h3 style={{display: "flex", justifyContent: "center",alignItems: "center"}} >Daily Affirmations. I am...</h3>

                        <br/>
                        
                        <fieldset>
                            <input type="text" name="daily_affirmation" value={this.state.daily_affirmation} onChange={this.changeHandler} />
                        </fieldset>

                        <br/>
                        
                        <fieldset>
                            <input type="submit" value="Complete Entry"/>
                        
                        </fieldset>
                    </div>
                
                </form>
            </div>

            </article>
            <footer>
                <ol id="page-numbers">
                    <li>1</li>
                    <li>2</li>
                </ol>
            </footer>
        </section>

    </div>
</div>
        )
    }

}


export default JournalForm