import React from 'react'


class VisionBoardForm extends React.Component{
    state = {
        user_id: 1, 
        main_title: "",
        sub_title_one: "",
        body_one: "",
        img_url_one: "",
        sub_title_two: "",
        body_two: "",
        img_url_two: "",
        sub_title_three: "", 
        body_three: "",
        img_url_three: "",
        sub_title_four: "", 
        body_four: "",
        img_url_four: "",
        sub_title_five: "",
        body_five: "",
        img_url_five: "",
        sub_title_six: "",
        body_six: "", 
        img_url_six: "",
        sub_title_seven: "",
        body_seven: "", 
        img_url_seven: "",
        sub_title_eight: "",
        body_eight: "", 
        img_url_eight: "",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]:e.target.value }) 
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render(){
        return(
            <div  className="vision-form-container">
                <form id="contact" onSubmit={this.submitHandler}>

                    
                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Board Name" name="main_title" value={this.state.main_title} onChange={this.changeHandler} />
                    </fieldset>
                    

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Title" name="sub_title_one" value={this.state.sub_title_one} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Description" name="body_one" value={this.state.body_one} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Image" name="img_url_one" value={this.state.img_url_one} onChange={this.changeHandler} />
                    </fieldset>


                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Title" name="sub_title_two" value={this.state.sub_title_two} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Description" name="body_two" value={this.state.body_two} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Image" name="img_url_two" value={this.state.img_url_two} onChange={this.changeHandler} />
                    </fieldset>

                    
                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Title" name="sub_title_three" value={this.state.sub_title_three} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Description" name="body_three" value={this.state.body_three} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Image" name="img_url_three" value={this.state.img_url_three} onChange={this.changeHandler} />
                    </fieldset>


                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Title" name="sub_title_four" value={this.state.sub_title_four} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Description" name="body_four" value={this.state.body_four} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Image" name="img_url_four" value={this.state.img_url_four} onChange={this.changeHandler} />
                    </fieldset>


                    <div className="second-form-side">
                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Title" name="sub_title_five" value={this.state.sub_title_five} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Description" name="body_five" value={this.state.body_five} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Image" name="img_url_five" value={this.state.img_url_five} onChange={this.changeHandler} />
                    </fieldset>
                    

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Title" name="sub_title_six" value={this.state.sub_title_six} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Description" name="body_six" value={this.state.body_six} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Image" name="img_url_six" value={this.state.img_url_six} onChange={this.changeHandler} />
                    </fieldset>


                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Title" name="sub_title_seven" value={this.state.sub_title_seven} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Description" name="body_seven" value={this.state.body_seven} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Image" name="img_url_seven" value={this.state.img_url_seven} onChange={this.changeHandler} />
                    </fieldset>

                    
                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Title" name="sub_title_eight" value={this.state.sub_title_eight} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Description" name="body_eight" value={this.state.body_eight} onChange={this.changeHandler} />
                    </fieldset>

                    <fieldset className="vision-field-set">
                    <input  type="text" placeholder="Image" name="img_url_eight" value={this.state.img_url_eight} onChange={this.changeHandler} />
                    </fieldset>

                    </div>


                    <input className="board-button" type="submit" value="Complete" />
                </form>
            </div>
        )
    }
}

export default VisionBoardForm


const style = {
    display: 'flex',
    border: 'solid 5px'
}


 
