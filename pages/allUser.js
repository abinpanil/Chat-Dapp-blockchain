import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/allUser.module.css'
import { ChatAppContext } from '@/Context/ChatAppContext'
import { UserCard } from '@/Components'
import AllUsersBackground from '@/Components/Vanta/AllUsersBackground'

function allUser() {
    const { userLists, addFriend, fiendList, account, loading } = useContext(ChatAppContext)
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        if (!searchTerm) return setFilteredUsers(userLists)
        const filteredFriends = userLists.filter((friend) =>
            friend.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filteredFriends)
    }, [searchTerm, userLists])

    const onSelect = (data, key) => {
        console.log({ data, key })
        setSelectedItem(key)
        addFriend(data)
    }

    return (
        <AllUsersBackground
            element={
                <div className={styles.container}>
                    <div className={styles.searchBar}>
                        <h1>Spacechain Directory</h1>
                        <input
                            type="text"
                            placeholder="Search by username or address"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.userGrid}>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((item, i) => {
                                const isFriendExist = fiendList.some(friend => friend?.pubkey?.toLowerCase() == item?.accountAddress?.toLowerCase());
                                return (
                                    <UserCard
                                        key={i + 1}
                                        i={i}
                                        item={item}
                                        isFriendExist={isFriendExist}
                                        onSelect={onSelect}
                                        account={account}
                                        loading={loading && i === selectedItem}
                                    />
                                );
                            })
                        ) : (
                            <p className={styles.noResults}>No users found.</p>
                        )}
                    </div>
                </div>
            }
        />
    )
}

export default allUser