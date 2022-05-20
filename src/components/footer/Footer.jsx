import React from 'react'
import styles from "./Footer.module.css"
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer__section}>
        <div className={styles.footer__section1}>
        <img className={styles.logo} src="/images/logo.jpg" alt="Kouture Logo" />
        </div>
        <div className={styles.footer__section2}>
          <h1>ABOUT THE SHOP</h1>
          <h4>Find KOUTURE HUB AT:</h4>
          <h3>Accra Mall</h3>
          <h3>Shop G39A</h3>
          <h3>Tetteh Quarshie</h3>
          <h3>Accra Ghana</h3>
          <h4>kouturehub@gmail.com | 0548344182</h4>
          <h5>Monday to Sunday: 10am to 8pm | Sunday: 12pm to 8pm</h5>
        </div>
        <div className={styles.footer__section3}>
          <h1>SERVICES</h1>
          <h3>Sewing</h3>
          <h3>Retail of Fabrics</h3>
          <h3>Alterations</h3>
          <h3>General Consultation</h3>
        </div>
        <div className={styles.footer__section4}>
        <h1>FOLLOW US</h1>
        <h2><FaFacebookF /></h2>
        <h2><FaTwitter /></h2>
        <h2><FaInstagram /></h2>
        </div>
    </div>   
  )
}

export default Footer




    // <div className={styles.footer__section} id="footer">
        
    // <div className={styles.footer__heading}>
    //     <h2 className={styles.footer__t1}>Contact Us</h2>
    // </div>

    // <div className={styles.footer__body}>
    // <div>
    //     <h3 className={styles.footer__h3}>Tell: 0554855330</h3>
    //     <h3 className={styles.footer__h3}>WhatsApp: 0268367727</h3>
    //     <h3 className={styles.footer__h3}>Email: kouturehub@email.com</h3>
    // </div>
    // </div>
// </div>
//   )
// }

