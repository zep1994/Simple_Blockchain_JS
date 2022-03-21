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
                        <label for="StartDate" name='StartDate'>Start Date</label> <br />
                        <input type="date" name="StartDate" onChange={this.handleChange} placeholder="Start Date" />
                        <br />

                        <label for="EndDate" name='EndDate'>End Date</label> <br />
                        <input type="date" name="EndDate" onChange={this.handleChange} placeholder='Emd Date' />
                        <br />
                        <br />

                        <label for="Type" name='Type'>Type of Time Off</label> <br />
                        <select name="Type" id="type" onChange={this.handleChange}>
                            <option value="Vacation">Vacation</option>
                            <option value="Medical Leave Paid">Meidcal Leave Paid</option>
                        </select>
                        <br />

                        <select name="Requesting" id="requesting" onChange={this.handleChange}>
                            <option value="Half Day (Morning)">Half Day (Morning)</option>
                            <option value="Half Day (Afternoon)">Half Day (Afternoon)</option>
                            <option value="Full Day">Full Day</option>
                        </select>
                        {/* <input type="text" name="Type" onChange={this.handleChange} placeholder='Type' /> */}
                        <br />
                        {/* <input type="text" name="Requesting" onChange={this.handleChange} placeholder='Requesting' /> */}
                        <br />
                        <label for="Comment" name='Comment'>Comment</label> <br />
                        <input type="text" name="Comment" onChange={this.handleChange} placeholder='Comment' />
                        <br />
                        <input type="submit" value="Submit"/>
                    </form>    
            </div>
        );
    }
}


export default TimeOff