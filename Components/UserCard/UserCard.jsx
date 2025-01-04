import React from 'react'
import styles from './UserCard.module.css'

const UserCard = ({ i, item, isFriendExist, onSelect, account, loading }) => {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={styles.background}>
                <div className={styles.pattern} />
            </div>
            <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
            <div className={`${styles.corner} ${styles.cornerTopRight}`} />
            <div className={`${styles.corner} ${styles.cornerBottomLeft}`} />
            <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}>
                        {/* <Smartphone className="w-6 h-6 text-primary" /> */}
                    </div>
                    <h3 className={styles.title}>{item?.name}</h3>
                </div>
                <p className={styles.description}>{item?.accountAddress?.slice(0, 25)}</p>

                {
                    item?.accountAddress.toLowerCase() == account.toLowerCase() ? <button className={`${styles.button} ${styles.meButton}`} disabled={true}>
                        Personal Space
                    </button>
                        :
                        isFriendExist ?
                            <button className={`${styles.button} ${styles.friendButton}`} disabled={true}>
                                In Sync
                            </button>
                            :
                            <button
                                className={`${styles.button} ${styles.addFriendButton}`}
                                onClick={() => onSelect({ name: item?.name, accountAddress: item?.accountAddress }, i)}
                                disabled={loading}
                            >
                                {loading ? <span className={styles.spinner}></span> : "Establish Link"}
                            </button>
                }

            </div>
        </div>
    )
}

export default UserCard