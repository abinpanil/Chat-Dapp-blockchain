import React, { useContext, useState } from 'react'
import styles from './Model.module.css'
import { ChatAppContext } from '@/Context/ChatAppContext';

const Model = ({ openModel, title, functionName, address }) => {

  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState(address || "")
  const { loading } = useContext(ChatAppContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (functionName) functionName({ name, accountAddress });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>{title}</h2>
        {loading && <p>Please wait a minute.</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
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
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={accountAddress}
              onChange={(e) => setAccountAddress(e.target.value)}
              className={`${styles.input} ${address ? styles.disabledInput : ''}`}
              placeholder={address || 'Enter address'}
              disabled={address || loading}
              required
            />
          </div>
          <div className={styles.buttonGroup}>
            <button
              type="submit"
              className={`${styles.button} ${!name || !address || loading ? styles.disabledButton : styles.enabledButton}`}
              disabled={!name || !address || loading}
            >
              {loading ? <span className={styles.spinner}></span> : "Submit"}
            </button>
            <button
              type="button"
              className={`${styles.cancelButton} ${loading ? styles.disabledButton : ''}`}
              onClick={() => openModel(false)}
              disabled={loading}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Model