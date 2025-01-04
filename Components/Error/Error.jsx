import React from 'react'
import styles from './Error.module.css'

const Error = ({ error }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.errorCode}>Lost in Space</h1>
                <h2 className={styles.errorMessage}>{error}</h2>
                {/* <p className={styles.description}>
                    {error}
                </p> */}
                <div className={styles.actions}>
                    <button className={styles.homeButton} onClick={() => (window.location.href = '/')}>
                        Back to Earth
                    </button>
                </div>
            </div>
            <div className={styles.background}></div>
        </div>
    )
}

export default Error