import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'

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
                    <Card style={{ width: '18rem', top: 20, left: 20 }} key={index}>
                    <Card.Body>
                        <Card.Title>{Chain.data.FirstName} {Chain.data.LastName}</Card.Title>
                        <Card.Text>
                            {Chain.data.Amount}
                        </Card.Text>
                        <Button variant="primary">Profile</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        );
    }

    componentDidMount() {
        fetch('http://localhost:5000/admin/employee/')
        .then(res => res.json())
        .then(res => this.setState({ Chain: res.Chain }))
    }
}



export default Employee