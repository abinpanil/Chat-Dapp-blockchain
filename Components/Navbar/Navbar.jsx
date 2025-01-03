import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./Navbar.module.css"
import { ChatAppContext } from '@/Context/ChatAppContext'
import { navMenuItems } from '@/constants/constants'
import { Error, Model } from "../index"
import Toast from '../Toast/Toast'


const Navbar = () => {

  const [active, setActive] = useState(2)
  const [open, setOpen] = useState(false)
  const [openModel, setOpenModel] = useState(false)

  const { account, userName, connectToWallet, createAccount, error, toast, setToast } = useContext(ChatAppContext)

  return (<>
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>
      <div className={styles.navRight}>
        <ul className={styles.navLinks}>
          {navMenuItems.map((item, i) => {
            return (
              <li
                key={i + 1}
                className={`${styles.navItem} ${active === i + 1 ? styles.active : ''
                  }`}
                onClick={() => { setActive(i + 1) }}
              >
                <a href={item.link}>{item.menu}</a>
              </li>
            )
          })}
        </ul>
        {account === "" ?
          <button onClick={() => connectToWallet()} className={styles.connectButton}>
            {""}
            <span>Connect Wallet</span>
          </button> :
          <button onClick={() => setOpenModel(true)} className={styles.connectButton}>
            {""}
            <small>{userName || "Create Account"}</small>
          </button>
        }
      </div>
    </nav>
    {openModel && <Model
      openModel={setOpenModel}
      title="Welcome"
      functionName={createAccount}
      address={account}
    />}
    {error && <Error error={error} />}
    {toast.show && <Toast toast={toast} setToast={setToast} />}
  </>
  )
}

export default Navbar