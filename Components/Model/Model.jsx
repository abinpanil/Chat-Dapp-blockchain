import React, { useState } from 'react'
import styles from './Model.module.css'

const Model = ({ openModel, title, functionName, address }) => {

  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState(address || "")
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (functionName) {
        await functionName({ name, accountAddress });
      }
    } catch (error) {
      console.error("Error in submission:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>{title}</h2>
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
              disabled={address}
              required
            />
          </div>
          <div className={styles.buttonGroup}>
            <button
              type="submit"
              className={`${styles.button} ${!name || !address || isLoading ? styles.disabledButton : styles.enabledButton}`}
              disabled={!name || !address || isLoading}
            >
              {isLoading ? <span className={styles.spinner}></span> : "Submit"}
            </button>
            <button
              type="button"
              className={`${styles.cancelButton} ${isLoading ? styles.disabledButton : ''}`}
              onClick={() => openModel(false)}
              disabled={isLoading}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Model