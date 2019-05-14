import styles from './Container.module.scss'
import React, { Component, Fragment } from 'react'
import {
    Welcome,
    Auth,
} from './../'
import { Switch, Route } from 'react-router-dom'


class Container extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path={'/auth'}
                    render={props => <Auth {...props} url={'/auth'} />}
                />
                <Route
                    path={'/'}
                    exact
                    component={Welcome}
                />
            </Switch>
        )
    }
}

export default Container;