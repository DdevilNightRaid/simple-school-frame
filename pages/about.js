import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/About.module.css'

// Importing Components 
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Importing Images 
import Hero0 from "../images/aboutImgs/hero0.png"
import Hero1 from "../images/aboutImgs/hero1.png"
import Hero2 from "../images/aboutImgs/hero2.png"
import WelcomeImg from "../images/aboutImgs/welcomeImg.png"
import Teacher0 from "../images/homeImgs/teacher0.jpg"
import Teacher1 from "../images/homeImgs/teacher1.jpg"
import Teacher2 from "../images/homeImgs/teacher2.jpg"
import Teacher3 from "../images/homeImgs/teacher3.jpg"
import Teacher4 from "../images/homeImgs/teacher4.jpg"

import { BiBookmarkAlt, BiBookBookmark } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navHolder}>
        <Navbar></Navbar>
      </div>
      <main className={styles.main}>
        <div className={styles.container0}>
          <div className={styles.c0Heading}>
            <h2>Grow Your Skills To</h2>
            <h2>Advance Your Carrier Path</h2>
          </div>
          <div className={styles.heroSentence}>
            <strong className={styles.EAC03D}>Discover</strong>
            <strong>|</strong>
            <strong className={styles.C69B7F9}>Learn</strong>
            <strong>|</strong>
            <strong className={styles.DF811F}>Create</strong>
          </div>
          <div className={styles.heroImgHolder}>
            <div className={styles.imgContainer}>
              <Image
                src={Hero1}
                alt="13"
                priority
                className={styles.hero0}
              />
            </div>
            <div className={styles.imgContainer1}>
              <Image
                src={Hero2}
                alt="13"
                priority
                className={styles.hero2}
              />
            </div>
            <div className={styles.imgContainer2}>
              <Image
                src={Hero0}
                alt="13"
                priority
                className={styles.hero0}
              />
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.c1field0}>
            <h1>Welcome Note</h1>
            <p>It is our immense pleasure to welcome you at Sagarmatha Higher Secondary School, the institution run by the academicians who have been working continuously for more than three decades nurturing young minds. We are truly dedicated to enlighten students with our guiding principle “Knowledge Character and Service</p>
          </div>
          <div className={styles.c1field1}>
            <Image
              src={WelcomeImg}
              alt="13"
              priority
              className={styles.c1Img}
            />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.c2box1}>
            <h1>Quality Education and Holistic Development at TheMisFitOfNightRaid:</h1>
            <h1> A Focus on Guidance, Monitoring, and Extra-Curricular Activities</h1>
          </div>
          <div className={styles.c2box0}>
            <div className={styles.c2B0Field0}>
              <Image
                src={Hero0}
                alt="13"
                priority
                className={styles.c2Img}
              />
            </div>
            <div className={styles.c2B0Field1}>
              <div className={styles.c2B0F1Sentences}>
                <div className={styles.c2B0F1bar}></div>
                <strong>Guidance, counseling, and instruction are core factors for institutions.</strong>
              </div>
              <div className={styles.c2B0F1Sentences}>
                <div className={styles.c2B0F1bar}></div>
                <strong>TheMisFitOfNightRaid&apos;s founders have 30+ years of experience.</strong>
              </div>
              <div className={styles.c2B0F1Sentences}>
                <div className={styles.c2B0F1bar}></div>
                <strong>Founding academicians teach and monitor students closely.</strong>
              </div>
              <div className={styles.c2B0F1Sentences}>
                <div className={styles.c2B0F1bar}></div>
                <strong>Objective: produce quality to meet 21st-century challenges.</strong>
              </div>
              <div className={styles.c2B0F1Sentences}>
                <div className={styles.c2B0F1bar}></div>
                <strong>Emphasis on qualitative education, career guidance, and psychological monitoring.</strong>
              </div>
              <div className={styles.c2B0F1Sentences}>
                <div className={styles.c2B0F1bar}></div>
                <strong>Extra-curricular activities in a cordial and disciplined environment.</strong>
              </div>
              <div className={styles.c2B0F1Sentences}>
                <div className={styles.c2B0F1bar}></div>
                <strong>Motto: &quot;KNOWLEDGE, CHARACTER & SERVICE&quot; to promote humanitarian attitude.</strong>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.c3box0}>
            <h2>We Offer</h2>
          </div>
          <div className={styles.c3box1}>
            <div className={styles.c3box1Section1}>
              <div className={styles.c3B1S1ImgHolder}>
                <BiBookmarkAlt />
              </div>
              <strong>The Best Courses</strong>
            </div>
            <div className={styles.c3box1Section0}>
              <strong>And</strong>
            </div>
            <div className={styles.c3box1Section1}>
              <div className={styles.c3B1S1ImgHolder}>
                <BiBookBookmark />
              </div>
              <strong>A Huge Library</strong>
            </div>
          </div>
        </div>
        <div className={styles.container4}>
          <div className={styles.box0}>
            <h2>The Foundation</h2>
            <p>TheMisFitOfNightRaid is run by a team of well-experienced and qualified academicians having decades of teaching and administrative experience. The founder team of Sagarmatha comprise of</p>
          </div>
          <div className={styles.box1}>
            <div className={styles.b1box}>
              <Image
                src={Teacher0}
                alt="13"
                priority
                className={styles.c4B1Img}
              />
              <h3>Mr Teacher Middle Name</h3>
              <strong>MSC CHEMISTRY</strong>
            </div>
            <div className={styles.b1box}>
              <Image
                src={Teacher1}
                alt="13"
                priority
                className={styles.c4B1Img}
              />
              <h3>Mrs Teacher Middle Name</h3>
              <strong>MSC MATHEMATICS</strong>
            </div>
            <div className={styles.b1box}>
              <Image
                src={Teacher2}
                alt="13"
                priority
                className={styles.c4B1Img}
              />
              <h3>Mr Teacher Middle Name</h3>
              <strong>MSC BOTANY</strong>
            </div>
            <div className={styles.b1box}>
              <Image
                src={Teacher3}
                alt="13"
                priority
                className={styles.c4B1Img}
              />
              <h3>Mrs Teacher Middle Name</h3>
              <strong>MSC Ed</strong>
            </div>
            <div className={styles.b1box}>
              <Image
                src={Teacher4}
                alt="13"
                priority
                className={styles.c4B1Img}
              />
              <h3>Mr Teacher Middle Name</h3>
              <strong>MSC , PHD PHYSICS</strong>
            </div>
            <div className={styles.b1box}>
              <Image
                src={Teacher0}
                alt="13"
                priority
                className={styles.c4B1Img}
              />
              <h3>Mr Teacher Middle Name</h3>
              <strong>MSC CHEMISTRY</strong>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.footerHolder}>
        <Footer></Footer>
      </div>
    </>
  )
}