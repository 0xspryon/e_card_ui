import styles from './SignIn.module.scss'
import React, { Component, Fragment } from 'react'
import classNames from 'classnames'


class Container extends Component {
    render() {
        return (
            <div className={styles.container}>

                <div className={
                    classNames(
                        styles.first,
                        styles.section
                    )}>
                    first section
                </div>
                <div className={
                    classNames(
                        styles.second,
                        styles.section
                    )}>
                    first section
                </div>
            </div>
        )
    }
}

export default Container;