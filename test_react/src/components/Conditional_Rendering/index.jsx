import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export default class Conditional_Rendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    handleLogin = () => {
        this.setState({ isLoggedIn: true });
    };

    handleLogout = () => {
        this.setState({ isLoggedIn: false });
    };

    render() {
        return this.state.isLoggedIn ? (
          <HomePage onLogout={this.handleLogout} />
        ) : (
          <LoginPage onLogin={this.handleLogin} />
        );
      }
}
