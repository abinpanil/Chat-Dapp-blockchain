import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/allUser.module.css'
import { ChatAppContext } from '@/Context/ChatAppContext'
import { UserCard } from '@/Components'

function allUser() {
    const { userLists, addFriend, fiendList } = useContext(ChatAppContext)
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        if (!searchTerm) setFilteredUsers(userLists)
    }, [userLists, searchTerm])

    const handleSearch = () => {
        const filtered = userLists.filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.accountAddress.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value) }}
                        placeholder="Search by username or address"
                        className={styles.searchInput}
                    />
                    <button
                        className={`${styles.searchButton} ${!searchTerm ? styles.disabledButton : styles.activeSearchButton}`}
                        onClick={handleSearch}
                        disabled={!searchTerm}>
                        Search
                    </button>
                    <button
                        className={`${styles.clearButton} ${!searchTerm ? styles.disabledButton : styles.activeClearButton}`}
                        onClick={() => setSearchTerm('')}
                        disabled={!searchTerm}>
                        Clear
                    </button>
                </div>

                <div className={styles.userList}>
                    {filteredUsers.map((item, i) => (
                        <UserCard
                            key={i + 1}
                            item={item}
                            i={i}
                            // isFriendExist={}
                            addFriend={addFriend}
                        />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default allUser