import React, { useEffect, useState } from 'react'
import styles from './chat.module.css'

function chat({ friend, message, sendMsg, account }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            sendMsg({ msg: newMessage, address: friend?.pubkey })
            setNewMessage("");
        }
    };

    useEffect(() => {
        setMessages(message)
    }, [message])


    return (
        <div className={styles.chatContainer}>
            {friend &&
                <>
                    <div className={styles.header}>
                        <img
                            src={friend.avatar || "https://via.placeholder.com/40"}
                            alt={friend.name}
                            className={styles.avatar}
                        />
                        <div>
                            <h2 className={styles.friendName}>{friend?.name}</h2>
                            <p className={styles.friendAddress}>{friend?.pubkey?.slice(0, 25)}</p>
                        </div>
                    </div>

                    <div className={styles.chatArea}>
                        {messages.map((msg, i) => {
                            return <div
                                key={i + 1}
                                className={`${styles.message} ${msg?.sender.toLowerCase() != account.toLowerCase() ? styles.friendMessage : styles.myMessage}`}
                            >
                                {msg.msg}
                            </div>
                        })}
                    </div>

                    <form className={styles.inputArea} onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className={styles.input}
                        />
                        <button type="submit" className={styles.sendButton}>
                            Send
                        </button>
                    </form>
                </>
            }
        </div>
    );
}

export default chat