import React, { useState } from 'react'
import styles from './Filter.module.css'

const Filter = () => {

  const [searchValue, setSearchValue] = useState("");


  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
      />
      <button
        className={`${styles.button} ${styles.searchButton}`}
        onClick={() => { }}
        disabled={!searchValue.trim()}
      >
        Search
      </button>
      <button
        className={`${styles.button} ${styles.clearButton}`}
        onClick={() => { }}
        disabled={!searchValue.trim()}
      >
        Clear
      </button>
    </div>
  )
}

export default Filter