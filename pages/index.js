import { Filter, Friend } from '@/Components'
import { ChatAppContext } from '@/Context/ChatAppContext'
import React, { useContext } from 'react'
import styles from '../styles/allUser.module.css'


function ChatApp() {
  const { } = useContext(ChatAppContext)
  return (
    <div>
      <div className={styles.container}>
        <Friend />
      </div>
    </div>
  )
}

export default ChatApp