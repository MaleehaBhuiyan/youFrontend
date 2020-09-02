import React from 'react'

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        first_name: "",
        last_name: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render(){
        return(
            <>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                    <input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} />
                    <input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} />
                    <input type="submit" value="Sign Up" />
                </form>
            </>
        
        )
    }
}

export default Signup