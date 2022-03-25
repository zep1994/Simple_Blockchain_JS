import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super()
            this.state = {
            FirstName: "",
            LastName: "",
            Amount: 0
        }
    }

    handleChange = (e) => {
        this.setState({
            FirstName: this.state.FirstName, 
            LastName: this.state.LastName, 
            Amount: this.state.Amount 
        })
    }

    handleSubmit = (e) => {

    }

    render() {
        return (
            <div>
                <form className="login-form" action="/sign-up" method="POST">
                    <div className="form-control">
                        <label htmlFor="email">E-Mail</label>
                            <input type="email" name="email" id="email"></input>
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"></input>
                        </div>
                        <div className="form-control">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword"></input>
                    </div>
                    <button className="btn" type="submit">Signup</button>
                </form> 
            </div>
        );
    }
}
export default SignUp;


