import React, { useEffect, useState } from 'react'
import styles from './list.module.css'

function list({ friends, setSelectedFriend }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredFriends, setFilteredFriends] = useState(friends)


    useEffect(() => {
        if (!searchQuery) return setFilteredFriends(friends)
        const filteredFriends = friends.filter((friend) =>
            friend.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFriends(filteredFriends)
    }, [searchQuery, friends])

    return (
        <div className={styles.friendsListContainer}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search friends..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
            </div>
            <div className={styles.listContainer}>
                {filteredFriends.length > 0 ? (
                    filteredFriends.map((friend, i) => (
                        <div key={i + 1} className={styles.friendCard}
                            onClick={() => setSelectedFriend(friend)}>
                            <img
                                src={friend.avatar || "https://via.placeholder.com/40"}
                                alt={friend.name}
                                className={styles.avatar}
                            />
                            <div className={styles.friendDetails}>
                                <p className={styles.friendName}>{friend?.name}</p>
                                <p className={styles.friendAddress}>{friend?.pubkey?.slice(0, 25)}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.noFriends}>No friends found</p>
                )}
            </div>
        </div>
    );
}

export default list