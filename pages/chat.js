import React from 'react'
import styles from '../styles/chat.module.css'
import { Friend } from '@/Components'
import ChatBackground from '@/Components/Vanta/ChatBackground'

function chat() {
    return (
        <ChatBackground
            element={<div className={styles.container}>
                <Friend />
            </div>}
        />
    )
}

export default chat