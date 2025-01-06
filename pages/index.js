import React, { useContext } from 'react'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import { ChatAppContext } from '@/Context/ChatAppContext'
import { Loader, Model } from '@/Components'


function ChatApp() {
  const { initialLoad, userName, account, createAccount, modal, setModal } = useContext(ChatAppContext)

  return (
    <>
      {initialLoad ? <Loader /> :
        <>
          <div className={styles.container}>
            <header className={styles.header}>
              <h1 className={styles.title}>Unleash the Future of Communication!</h1>
              <p className={styles.subheading}>
                Secure, decentralized communication powered by Ethereum. Connect with others while keeping your conversations private and tamper-proof.
              </p>
              {(account && userName) ? <div className={styles.buttonContainer}>
                <Link href={'allUser'}>
                  <button className={styles.buttonPrimary}>Explore the Grid</button>
                </Link>
                <Link href={'chat'}>
                  <button className={styles.buttonSecondary}>Enter the Ether</button>
                </Link>
              </div> :
                <button className={styles.buttonPrimary} onClick={() => setModal(true)}>Enter the Blockchain Cosmos</button>
              }
            </header>
          </div>
          {modal && <Model
            openModel={setModal}
            functionName={createAccount}
            address={account}
          />}
        </>
      }
    </>
  )
}

export default ChatApp