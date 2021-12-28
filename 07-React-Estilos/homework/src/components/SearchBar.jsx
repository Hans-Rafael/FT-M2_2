import React from "react";
import styles from "./SearchBar.module.css";


export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.SearchBar} >
      <input className={styles.color} type="text" placeholder="City..." />
      
        <button className={styles.btn} onClick={() => props.onSearch("Searching...")}>Search</button>
      </div>
    
  );
}