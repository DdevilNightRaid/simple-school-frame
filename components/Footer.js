
import Link from 'next/link'
import Image from 'next/image'
// Importing CSS 
import styles from '@/styles/Footer.module.css'

// Importing Image 
import Logo from '../images/logo.jpg'

import { FaMapMarkerAlt, FaFacebookSquare, FaTwitterSquare, FaRegCopyright } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { BsFillTelephoneInboundFill } from "react-icons/bs";


const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerBox0}>
                <div className={styles.fb0Section1}>
                    <Link className={styles.footerHomeLink} href={"/"}>
                        <Image
                            src={Logo}
                            alt="13"
                            priority
                            className={styles.footerImg}
                        />
                    </Link>
                    <h2>TheMisFitOfNightRaid</h2>
                </div>
                <div className={styles.fb0Section2}>
                    <div className={styles.footerNumber}>
                        <BsFillTelephoneInboundFill className={styles.emailIco} />
                        <strong>+ 977 9817109084</strong>
                    </div>
                    <div className={styles.footerEmail}>
                        <SiMaildotru className={styles.emailIco} />
                        <strong>themisfitofnightraid@proton.me</strong>
                    </div>
                    <div className={styles.footerAddress}>
                        <FaMapMarkerAlt className={styles.addressMarker} />
                        <strong>Srijana Chowk, Pokhara 8</strong>
                    </div>
                    <div className={styles.footerLinks}>
                        <Link href={"https://facebook.com"}><FaFacebookSquare className={styles.footerSocial} /></Link>
                        <Link href={"https://twitter.com"}><FaTwitterSquare className={styles.footerSocial} /></Link>
                    </div>
                    <div className={styles.copyright}>
                        <strong>TheMisFitOfNightRaid | </strong><strong>CopyRight <FaRegCopyright /> </strong><strong> 2023 </strong>
                    </div>
                    <div className={styles.themisfitofnightraid}>
                        <strong className={styles.developedBy}>Developed By: </strong>
                        <Link className={styles.LinkTheMisFitOfNightRaid} href={"https://themisfitofnightraid.com"}>
                            <strong className={styles.tmonr}>TheMisFitOfNightRaid</strong>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBox1}></div>
            <div className={styles.footerBox2}>
                <h2>Our location</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.85000862204!2d83.97691627466232!3d28.211869303060567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595fe43a01b1f%3A0xc5391798569c78be!2sTheMisFitOfNightRaid!5e0!3m2!1sen!2snp!4v1681718992171!5m2!1sen!2snp"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
            </div>
        </div>
    )
}
export default Footer