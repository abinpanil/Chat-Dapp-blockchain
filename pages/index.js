import React from 'react'
import styles from '../styles/index.module.css'
import Link from 'next/link'


function ChatApp() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>BlockChat</h1>
        <p className={styles.subheading}>
          Secure, decentralized communication powered by Ethereum. Connect with others while keeping your conversations private and tamper-proof.
        </p>
        <div className={styles.buttonContainer}>
          <Link href={'allUser'}>
            <button className={styles.buttonPrimary}>Explore the Grid</button>
          </Link>
          <Link href={'chat'}>
            <button className={styles.buttonSecondary}>Enter the Ether</button>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default ChatApp