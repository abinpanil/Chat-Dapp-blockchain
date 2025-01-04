import React, { useContext, useState } from 'react'
import styles from './Friend.module.css'
import List from './list/list'
import Chat from './chat/chat'
import { ChatAppContext } from '@/Context/ChatAppContext'

const Friend = () => {
  const { fiendList } = useContext(ChatAppContext)
  const [selectedFriend, setSelectedFriend] = useState([]);

  return (
    <div className={styles.chatAppContainer}>
      <div className={styles.friendListContainer}>
        <List friends={fiendList} setSelectedFriend={setSelectedFriend} />
      </div>

      <div className={styles.chatContainer}>
        <Chat friend={selectedFriend} />
      </div>
    </div>
  );
}

export default Friend