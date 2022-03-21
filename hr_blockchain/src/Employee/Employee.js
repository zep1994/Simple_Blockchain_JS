import React, { Component } from 'react';

class Employee extends Component {
    constructor() {
        super()
            this.state = {
                chain: []
        }
    }

    render() {
        return (
            <div className="App">
                {this.state.chain.map((chain, index) => (
                    <li key={index}>
                        <span>{chain.data.FirstName}</span><br />
                        <span>{chain.data.LastName}</span><br />
                        <span>{chain.data.Amount}</span><br />
                    </li>
                ))}
            </div>
        );
    }

    componentDidMount() {
        fetch('http://localhost:5000/employee/')
        .then(res => res.json())
        .then(res => this.setState({ chain: res.chain }))
    }
}



export default Employee