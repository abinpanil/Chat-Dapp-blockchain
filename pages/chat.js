import React from 'react'
import styles from '../styles/chat.module.css'
import { Friend } from '@/Components'

function chat() {
    return (
        <div className={styles.container}>
            <Friend />
        </div>
    )
}

export default chat