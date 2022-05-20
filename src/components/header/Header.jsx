import React from 'react'
import styles from "./Header.module.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
  <div className={styles.header}>
    {/* left section */}
    <div className={styles.left}>
      <h4 className={styles.header__h4} >Welcome to studybud</h4>
      <p className={styles.header__p}>We Design Amazing</p>
      <h1 className={styles.header__h1}>Styles</h1>
     </div>
      <div className= {styles.bttn}>
        <Link to="/student-login">
          <button className={styles.button}>Student Login</button>
        </Link> 
        <Link to="/teacher-login">
          <button className={styles.button}>Teacher Login</button>
        </Link> 
      </div>
  </div>
  )
}

export default Header;