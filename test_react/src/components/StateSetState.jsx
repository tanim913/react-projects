import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class StateSetState extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }
    increaseCount=()=>{
        this.setState({
            count : this.state.count >= 10 ? this.state.count + 0 : this.state.count + 1
        })
    }
    decreaseCount=()=>{
        this.setState({
            count : this.state.count <= 0 ? this.state.count + 0 : this.state.count - 1
        })
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h1> Count : {count} </h1>
                <Button
                    onClick={this.increaseCount}
                    style={{ marginRight: '1rem', marginLeft:'1rem' }}
                >
                    +
                </Button>
                <Button
                    onClick={this.decreaseCount}
                >
                    -
                </Button>
            </div>
        )
    }
}
