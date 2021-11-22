import Head from 'next/head'
import styles from '../../styles/SideComp.module.css'
const profImage = require('../../public/userImage.png')
import Image from 'next/image'
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaUserCircle, FaUser } from 'react-icons/fa';

export default function SideComponent() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joao da Costa | Resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sideComp}>
          <h4 className={styles.profileName}>JOAO DA COSTA</h4>
          <div className={styles.profileBox}>
            <div className={styles.profileImageBox}>
                <Image src={profImage} alt="profile"/>
            </div>
            <div className={styles.online_dot}></div>
          </div>
          <div className={styles.line}></div>
          <nav className={styles.menu}>
              <ul>
                  <li><a href="#"><FaUser/> About Me</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Resume</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                  
              </ul>
          </nav>
          <div className={styles.btn_box}>
            <button className={styles.hire_me_btn}>Hire me</button>
          </div>
          <p className={styles.phoneNumber}>+55 21 969 712 168</p>
          <div className={styles.icons}>
              <div className={styles.icon_box}><FaLinkedinIn/></div>
              <div className={styles.icon_box}><FaInstagram/></div>
              <div className={styles.icon_box}><FaTwitter/></div>
              <div className={styles.icon_box}><FaFacebookF/></div>
          </div>
      </div>
    </div>
  )
}
