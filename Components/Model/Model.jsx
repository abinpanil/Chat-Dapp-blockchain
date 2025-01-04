import React, { useContext, useEffect, useState } from 'react'
import styles from './Model.module.css'
import { ChatAppContext } from '@/Context/ChatAppContext';

const Model = ({ openModel, functionName, address }) => {

  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState(address || "")
  const [checkbox, setCheckbox] = useState(false)
  const { loading } = useContext(ChatAppContext)


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (functionName) functionName({ name, accountAddress });
  };

  return (
    <div className={`${styles.container} ${openModel ? styles.active : styles.hidden}`}>
      <button className={styles.closeButton} onClick={() => openModel(false)}>
        &times;
      </button>
      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formHeading}>Create Your Space</h3>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                placeholder="Enter your name"
                required
                disabled={loading}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="address">Wallet Address</label>
              <input
                type="text"
                id="address"
                value={accountAddress}
                onChange={(e) => setAccountAddress(e.target.value)}
                placeholder={address || 'Enter address'}
                disabled={address || loading}
                required
              />
            </div>
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="terms" value={checkbox} onChange={() => setCheckbox(!checkbox)} disabled={loading} />
              <label htmlFor="terms">I agree to the processing of my personal data.</label>
              <button
                className={`${styles.submitButton} ${!name || !accountAddress || !checkbox || loading ? styles.disabledButton : styles.activeButton}`}
                disabled={!name || !address || !checkbox || loading}
                type="submit">
                {loading ? <span className={styles.spinner}></span> : "Create My Space"}
              </button>
            </div>
          </form>
        </div>

        <div className={styles.infoSection}>
          <h2 className={styles.heading}>Welcome to <span>ChainTalk</span></h2>
          <p className={styles.subheading}>
            Join the future of decentralized communication. Create your account now and
            be part of a blockchain-powered chat revolution.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Model