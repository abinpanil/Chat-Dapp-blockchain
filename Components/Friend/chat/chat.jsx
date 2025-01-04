import React, { useState } from 'react'
import styles from './chat.module.css'

function chat({ friend }) {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey there!", sender: "friend" },
        { id: 2, text: "Hello! How are you?", sender: "me" },
        { id: 3, text: "I'm good, thanks for asking!", sender: "friend" },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            setMessages([...messages, { id: Date.now(), text: newMessage, sender: "me" }]);
            setNewMessage("");
        }
    };

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
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`${styles.message} ${msg.sender === "me" ? styles.myMessage : styles.friendMessage
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
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