import React from 'react'
// import { withRouter } from "react-router-dom";

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
         //having problems with redirecting... redirects to welcome but doesnt redirect to home ...

        // const { history } = this.props;
        // history.push("/home")
        // this.props.history.push("/home")
    }

    render(){
        console.log("History Props in Login.js: ", this.props.history)
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
                    <input type="submit" value="Login" />
                </form>
            </>
        
        )
    }
}

// export default withRouter(Login);
export default Login;