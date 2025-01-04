import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from "./Navbar.module.css"
import { ChatAppContext } from '@/Context/ChatAppContext'
import { Error, Model } from "../index"
import Toast from '../Toast/Toast'


const Navbar = () => {
  const { account, userName, connectToWallet, createAccount, error, toast, setToast, modal, setModal } = useContext(ChatAppContext)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.navbar}`);
      if (window.scrollY > 0) {
        navbar.classList.add(styles.shadow);
      } else {
        navbar.classList.remove(styles.shadow);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (<>
    <nav className={styles.navbar}>
      <Link className={styles.logo} href={'/'}>ChainTalk</Link>
      <div className={styles.navRight}>
        {!userName ?
          <button
            onClick={() => account === "" ?
              connectToWallet() :
              setModal(true)}
            className={`${styles.button} ${account === "" ? styles.connectButton : styles.createButton}`}
          >
            {""}
            <span>{account === "" ? "Connect Wallet" : "Create Account"}</span>
          </button> :
          <div className={styles.userDisplay}>
            <span className={styles.userName}>{userName}</span>
          </div>
        }
      </div>
    </nav>
    {modal && <Model
      openModel={setModal}
      functionName={createAccount}
      address={account}
    />}
    {error && <Error error={error} />}
    {toast.show && <Toast toast={toast} setToast={setToast} />}
  </>
  )
}

export default Navbar