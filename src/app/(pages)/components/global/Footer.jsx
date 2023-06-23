import styles from '../../../../css/Footer.module.css'
import Logo from "../../../../../public/images/logo.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles['cyp-row']}`}>
        <div className={`${styles['col-lg-4']} ${styles['col-md-12']}`}>
          <div className={`${styles['footer-brand']}`}>
            {/* Reposition the image file if possible  */}
            <Image
              src={Logo}
              alt=""
            />

            {/* Look at the Icons i commented out and use REACT ICONS to replace them */}
            <div className={`${styles['footer-social']}`}>
              {/* Import the fontawesome CSS module to enable these icons  */}
              <a href="#">
                {/* <i className={`${styles.fab} ${styles.fa-instagram}`}></i> */}
              </a>
              <a href="#">
                {/* <i className={`${styles.fab} ${styles.fa-whatsap}`}></i> */}
              </a>
              <a href="#">
                {/* <i className={`${styles.fab} ${styles.fa-twitter}`}></i> */}
              </a>
              <a href="#">
                {/* <i className={`${styles.fab fa-facebook}`}></i> */}
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles['col-lg-4']} ${styles['col-md-12']}`}>
          <ul className={`${styles['footer-list']}`}>
            <div className={`${styles['footer-list-header']}`}>Other Links</div>
            <li className={`${styles['footer-item']}`}>
              <a href="#">Admin sign in</a>
            </li>
            <li className={`${styles['footer-item']}`}>
              <a href="#">About us</a>
            </li>
            <li className={`${styles['footer-item']}`}>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div clasName={`${styles['cyp-row']}`}>
        <div className={`${styles['footer-credits']}`}>
            {/* Made the year programmatic */}
          &copy;<span id="dateYear">{new Date().getFullYear()}</span>{" "}
          <a href="#">www.connect.ng.</a> All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer