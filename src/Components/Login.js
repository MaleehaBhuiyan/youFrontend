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
    }

    render(){
        return(
            <>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className="login">
                    <div className="heading">
                        <h2>Sign In</h2>
                        <form onSubmit={this.submitHandler}>

                        <div class="form-group">
                            <input required="required" class="form-control" type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
                            <label for="input" class="control-label">Username</label><i class="bar"></i>
                        </div>


                        <br/>
                        <div class="form-group">
                            <input required="required" class="form-control" type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                            <label for="input" class="control-label">Password</label><i class="bar"></i>
                        </div>
                        <br/>
                        {/* <button type="submit" class="login-button">Login</button> */}

                        <div class="button-container">
                            <button type="submit" class="button"><span>Login</span></button>
                        </div>


                        </form>
                    </div>
                </div>


                <div id="background-wrap">
                <br/>
                <br/>
                <br/>
                    <div class="x1">
                         <div class="cloud"></div>
                    </div>

                    <div class="x2">
                        <div class="cloud"></div>
                    </div>

                    <div class="x3">
                        <div class="cloud"></div>
                    </div>

                    <div class="x4">
                        <div class="cloud"></div>
                     </div>

                    <div class="x5">
                        <div class="cloud"></div>
                    </div>
                </div>
            </>
        
        )
    }
}

// export default withRouter(Login);
export default Login;


{/* <div class="form-group">
    <input class="form-control" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
      <label for="input" class="control-label">Textfield</label><i class="bar"></i>
</div> */}

    

  


   





 		
