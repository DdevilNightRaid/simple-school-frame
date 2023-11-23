import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Importing CSS 
import styles from '@/styles/NavBar.module.css'

// Importing Icons 
import { FaBars, FaTimes } from 'react-icons/fa'

// Importing Image 
import Logo from '../images/logo.jpg'

const Navbar = () => {
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle(styles.responsiveNav)
        console.log(navRef)
    }
    return (
        <div className={styles.navContainer}>
            <Link className={`${styles.navLink} ${styles.active}`} href={"/"}>
                <Image
                    src={Logo}
                    alt="13"
                    priority
                    className={styles.navImg}
                />
            </Link>
            <nav className={styles.nav} ref={navRef}>
                <Link className={`${styles.navLink} ${styles.active}`} href={"/"}>Home</Link>
                <Link className={`${styles.navLink} ${styles.active}`} href={"/about"}>About</Link>
                <Link className={`${styles.navLink} ${styles.active}`} href={"/notice"}>Notice</Link>
                <Link className={`${styles.navLink} ${styles.active}`} href={"/gallery"}>Gallery</Link>
                <Link className={`${styles.navLink} ${styles.active}`} href={"/courses"}>Courses</Link>
                <button className={styles.askBtn}>
                    <Link classN ame={`${styles.navLink} ${styles.active}`} href={"https://www.facebook.com/themisfitofnightraid"}>Ask</Link>
                </button>
                {/* <Link className={`${styles.navLink} ${styles.active}`} href={`tel:${phonenumber}`}>Menu</Link> */}
                <button className={`${styles.navBtns} ${styles.navCloseBtns}`} onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={styles.navBtns} onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    )
}
export default Navbar