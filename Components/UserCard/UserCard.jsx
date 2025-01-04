import React from 'react'
import styles from './UserCard.module.css'

const UserCard = ({ item, i, addFriend }) => {
    return (
        <div className={styles.card}>
            <div className={styles.logo}>
                <img
                    src="https://via.placeholder.com/60"
                    alt="User Logo"
                    className={styles.logoImage}
                />
            </div>
            <div className={styles.details}>
                <h3 className={styles.username}>{item?.name}</h3>
                <p className={styles.address}>{item?.accountAddress?.slice(0, 25)}</p>
            </div>
            <button className={styles.addFriendButton} onClick={() => addFriend({ name: item?.name, accountAddress: item?.accountAddress })}>
                Add Friend
            </button>
        </div>
    )
}

export default UserCard