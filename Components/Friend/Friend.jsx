import React, { useContext, useEffect, useState } from 'react'
import styles from './Friend.module.css'
import List from './list/list'
import Chat from './chat/chat'
import { ChatAppContext } from '@/Context/ChatAppContext'

const Friend = () => {
  const { fiendList, friendMsg, sendMsg, readMessage, account } = useContext(ChatAppContext)
  const [selectedFriend, setSelectedFriend] = useState([]);

  useEffect(() => {
    setSelectedFriend(fiendList[0])
  }, [fiendList])

  useEffect(() => {
    if (selectedFriend?.length) readMessage(selectedFriend?.pubkey)
  }, [selectedFriend])

  return (
    <div className={styles.chatAppContainer}>
      <div className={styles.friendListContainer}>
        <List friends={fiendList} setSelectedFriend={setSelectedFriend} />
      </div>

      <div className={styles.chatContainer}>
        <Chat friend={selectedFriend} message={friendMsg} sendMsg={sendMsg} account={account} />
      </div>
    </div>
  );
}

export default Friend