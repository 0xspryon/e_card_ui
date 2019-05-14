import styles from './Auth.module.scss'
import React, { Component, Fragment } from 'react'
import SignIn from './sign_in/SignIn'
import SignUp from './sign_up/SignUp'
import { Switch, Route } from 'react-router-dom'

class Container extends Component {
    render() {
        const { url } = this.props
        return (
                <Switch>
                    <Route
                        path={`${url}/register`}
                        exact
                        component={SignUp}
                    />
                    <Route
                        path={`${url}`}
                        exact
                        component={SignIn}
                    />
                </Switch>
        )
    }
}

export default Container;