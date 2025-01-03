import React from 'react'
import styles from './Error.module.css'

const Error = ({ error }) => {
    console.log(error)
    return (
        <div className={styles.errorPage}>
            <div className={styles.errorContent}>
                <h2 className={styles.title}>{error}</h2>
                <p className={styles.message}>
                    Please make the change and hit below button
                </p>
                <a className={styles.reloadButton} href='/'>
                    Reload Home
                </a>
            </div>
        </div>
    )
}

export default Error