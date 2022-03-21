import React, { Component } from 'react';

class Employee extends Component {
    constructor() {
        super()
            this.state = {
                Chain: []
        }
    }

    render() {
        return (
            <div className="App">
                {this.state.Chain.map((Chain, index) => (
                    <li key={index}>
                        <span>{Chain.data.FirstName}</span><br />
                        <span>{Chain.data.LastName}</span><br />
                        <span>{Chain.data.Amount}</span><br />
                    </li>
                ))}
            </div>
        );
    }

    componentDidMount() {
        fetch('http://localhost:5000/employee/')
        .then(res => res.json())
        .then(res => this.setState({ Chain: res.Chain }))
    }
}



export default Employee