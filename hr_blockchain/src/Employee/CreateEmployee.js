import React, { Component } from 'react';

class CreateEmployee extends Component {
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
        fetch('http://localhost:5000/add-employee', {
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
            <div className="App">
                <h1 className="Title">Create Employee</h1>  
                    <form method="POST" action="/employee" onSubmit={this.handleSubmit}>
                        <input type="text" name="FirstName" onChange={this.handleChange} placeholder="First Name" />
                        <br />
                        <input type="text" name="LastName" onChange={this.handleChange} placeholder='Last Name' />
                        <br />
                        <input type="text" name="Amount" onChange={this.handleChange} placeholder='Amount' />
                        <br />
                        <input type="submit" value="Submit"/>
                    </form>    
            </div>
        );
    }

    // componentDidMount() {
    //     fetch('http://localhost:5000/')
    //     .then(res => res.json())
    //     .then(res => this.setState({ FirstName: res.FirstName, LastName: res.LastName, Amount: res.Amount }))
    // }
}
export default CreateEmployee;
