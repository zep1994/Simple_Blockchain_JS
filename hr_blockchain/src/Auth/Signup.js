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

    handleChange = (e) => {
        this.setState({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        })
    }


    handleSubmit = (e) => {
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:  console.log(JSON.stringify(this.state))
            })
        .then(res => res.json())
    }

    render() {
        return (
            <div>
                <form className="login-form" action="/register" method="POST" onSubmit={this.handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" onChange={this.handleChange} ></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" onChange={this.handleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" onChange={this.handleChange}></input>
                    </div>
                    <button className="btn" type="submit">Signup</button>
                </form> 
            </div>
        );
    }
}
export default SignUp;


