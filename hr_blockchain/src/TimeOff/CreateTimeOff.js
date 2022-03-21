import React, { Component } from 'react';

class TimeOff extends Component {
    constructor() {
        super()
            this.state = {
                StartDate: "",
                EndDate: "",
                Type: "",
                Requesting: 0,
                Comment: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            StartDate: this.state.StartDate, 
            EndDate: this.state.EndDate, 
            Type: this.state.Type,
            Requesting: this.state.Requesting,
            Comment: this.state.Comment
        })
    }

    handleSubmit = (e) => {
        fetch('http://localhost:5000/create-time-off', {
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
                <h1 className="Title">Create Time Off</h1>  
                    <form method="POST" action="/time-off" onSubmit={this.handleSubmit}>
                        <input type="text" name="StartDate" onChange={this.handleChange} placeholder="Start Date" />
                        <br />
                        <input type="text" name="EndDate" onChange={this.handleChange} placeholder='Emd Date' />
                        <br />
                        <input type="text" name="Type" onChange={this.handleChange} placeholder='Type' />
                        <br />
                        <input type="text" name="Requesting" onChange={this.handleChange} placeholder='Requesting' />
                        <br />
                        <input type="text" name="Comment" onChange={this.handleChange} placeholder='Comment' />
                        <br />
                        <input type="submit" value="Submit"/>
                    </form>    
            </div>
        );
    }
}


export default TimeOff