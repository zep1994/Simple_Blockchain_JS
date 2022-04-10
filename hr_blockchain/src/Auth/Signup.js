import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super()
            this.state = {
            firstName: "",
            lastName: "",
            email: 0,
            password: "",
        }
    }


    handleSubmit = (e) => {

    }

    render() {
        return (
            <div>
                <form className="login-form" action="/register" method="POST">
                    <div className="form-control">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName"></input>
                    </div>
                    <div className='form-control'>
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


