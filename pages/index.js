import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// Importing Components 
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Importing Images 
import schoolGirl from "../images/homeImgs/schoolgirl.png"
import collageBoy from "../images/homeImgs/collageboy.png"
import Arrow1 from "../images/homeImgs/arrow1.png"
import Teacher0 from "../images/homeImgs/teacher0.jpg"
import Teacher1 from "../images/homeImgs/teacher1.jpg"
import Teacher2 from "../images/homeImgs/teacher2.jpg"
import Teacher3 from "../images/homeImgs/teacher3.jpg"
import Teacher4 from "../images/homeImgs/teacher4.jpg"
import Student0 from "../images/homeImgs/student0.jpg"
import Student1 from "../images/homeImgs/student1.jpg"
import Student2 from "../images/homeImgs/student2.jpg"
import Student3 from "../images/homeImgs/student3.jpg"
import Student4 from "../images/homeImgs/student4.jpg"

import { BiBookmarkAlt, BiUserCheck, BiBookBookmark } from "react-icons/bi";
import { FaRupeeSign, FaReact, FaMapMarkerAlt, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const inter = Inter({ subsets: ['latin'] })

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
        <div className={styles.landingHero}>
          <div className={styles.lhSection0}>
            <h1 className={styles.lhHeading}>Creating A Better Future</h1>
            <strong className={styles.lhStrong}>Let the child be the director, and the actor in his onw play</strong>
          </div>
          <div className={styles.lhSection1}>
            <div className={styles.lhS1part0}>
              <div className={styles.lhS1P0Circle}>
                <Image
                  src={schoolGirl}
                  alt="13"
                  priority
                  className={styles.schoolGirl}
                />
              </div>
            </div>
            <div className={styles.lhS1part1}>
              <div className={styles.lhS1P1filed0}>
                <div className={styles.callUsNow}>
                  <strong>Call Us Now: 061 59835</strong>
                </div>
              </div>
              <div className={styles.lhS1P1filed1}>
                <p>Welcome to our school! Where learning is not just a task, but an adventure. Our goal is to create an environment where every student can thrive and reach their full potential.</p>
              </div>
              <div className={styles.lhS1P1filed2}>
                <div className={styles.seven}>
                  <h1>7.5K +</h1>
                  <strong>Students graduated </strong>
                </div>
                <Image
                  src={Arrow1}
                  alt="13"
                  priority
                  className={styles.arrow1}
                />
                <div className={styles.hundred}>
                  <div className={styles.miniHundred}>
                    <h1>100 +</h1>
                    <strong>Students graduating every year</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.lhS1part2}>
              <div className={styles.lhS1P2Circle}>
                <Image
                  src={collageBoy}
                  alt="13"
                  priority
                  className={styles.collageBoy}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.c1Section0}>
            <div className={styles.c1S0field0}>
              <h1>Why we are best from other ?</h1>
              <p>Welcome to our school! Where learning is not just a task, but an adventure. Our goal is to create an environment where every student can thrive and reach their full potential.</p>
              <button className={styles.c1S0Btn}>
                <Link className={styles.learnMore} href={"/about"}>Learn More</Link>
              </button>
            </div>
            <div className={styles.c1S0field1}>
              <div className={styles.c1S1box}>
                <div className={styles.c1S1boxHolder}>
                  <BiBookmarkAlt className={styles.tutor} />
                </div>
                <h3>Best Tutor</h3>
                <p>the best there is from all of the country hand picked by our special staff board</p>
              </div>
            </div>
          </div>
          <div className={styles.c1Section1}>
            <div className={styles.c1S1box}>
              <div className={styles.c1S1boxHolder1}>
                <BiUserCheck className={styles.tutor} />
              </div>
              <h3>Best Tutor</h3>
              <p>the best there is from all of the country hand picked by our special staff board</p>
            </div>
            <div className={styles.c1S1box}>
              <div className={styles.c1S1boxHolder2}>
                <BiBookBookmark className={styles.tutor} />
              </div>
              <h3>Best Tutor</h3>
              <p>the best there is from all of the country hand picked by our special staff board</p>
            </div>
            <div className={styles.c1S1box}>
              <div className={styles.c1S1boxHolder3}>
                <FaRupeeSign className={styles.tutor} />
              </div>
              <h3>Best Tutor</h3>
              <p>the best there is from all of the country hand picked by our special staff board</p>
            </div>
            <div className={styles.c1S1box}>
              <div className={styles.c1S1boxHolder4}>
                <FaReact className={styles.tutor} />
              </div>
              <h3>Best Tutor</h3>
              <p>the best there is from all of the country hand picked by our special staff board</p>
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.c2Field0}>
            <h2>Meet our professional mentors</h2>
          </div>
          <div className={styles.c2Field1}>
            <div className={styles.c2F1Teacherbox}>
              <Image
                src={Teacher0}
                alt="13"
                priority
                className={styles.teacherImg}
              />
              <h2>Teacher Name</h2>
              <strong>Teacher qualification</strong>
            </div>
            <div className={styles.c2F1Teacherbox}>
              <Image
                src={Teacher1}
                alt="13"
                priority
                className={styles.teacherImg}
              />
              <h2>Teacher Name</h2>
              <strong>Teacher qualification</strong>
            </div>
            <div className={styles.c2F1Teacherbox}>
              <Image
                src={Teacher2}
                alt="13"
                priority
                className={styles.teacherImg}
              />
              <h2>Teacher Name</h2>
              <strong>Teacher qualification</strong>
            </div>
            <div className={styles.c2F1Teacherbox}>
              <Image
                src={Teacher3}
                alt="13"
                priority
                className={styles.teacherImg}
              />
              <h2>Teacher Name</h2>
              <strong>Teacher qualification</strong>
            </div>
            <div className={styles.c2F1Teacherbox}>
              <Image
                src={Teacher4}
                alt="13"
                priority
                className={styles.teacherImg}
              />
              <h2>Teacher Name</h2>
              <strong>Teacher qualification</strong>
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.c3Box0}>
            <div className={styles.c3Feedbacks}>
              <Image
                src={Student0}
                alt="13"
                priority
                className={styles.studentImg}
              />
              <h2>John Smith</h2>
              <strong>I love this school, the teachers here are so great and help us understand everything</strong>
            </div>
          </div>
          <div className={styles.c3Box1}>
            <div className={styles.c3Feedbacks1}>
              <Image
                src={Student1}
                alt="13"
                priority
                className={styles.studentImg1}
              />
              <h2>John Smith</h2>
              <strong>I love this school, the teachers here are so great and help us understand everything</strong>
            </div>
          </div>
          <div className={styles.c3Box2}>
            <div className={styles.c3Feedbacks2}>
              <Image
                src={Student2}
                alt="13"
                priority
                className={styles.studentImg2}
              />
              <h2>John Smith</h2>
              <strong>I love this school, the teachers here are so great and help us understand everything</strong>
            </div>
          </div>
          <div className={styles.c3Box3}>
            <div className={styles.c3Feedbacks3}>
              <Image
                src={Student3}
                alt="13"
                priority
                className={styles.studentImg3}
              />
              <h2>John Smith</h2>
              <strong>I love this school, the teachers here are so great and help us understand everything</strong>
            </div>
          </div>
          <div className={styles.c3Box4}>
            <div className={styles.c3Feedbacks4}>
              <Image
                src={Student4}
                alt="13"
                priority
                className={styles.studentImg4}
              />
              <h2>John Smith</h2>
              <strong>I love this school, the teachers here are so great and help us understand everything</strong>
            </div>
          </div>
        </div>
        <div className={styles.container4}>
          <div className={styles.c4Box0}>
            <h1>Contact Us</h1>
            <span></span>
            <p>We usually answer during 24 hours in working days.</p>
            <form className={styles.contactForm}>
              <div className={styles.forName}>
                <label htmlFor="name" className={styles.labelName}>Full Name</label>
                <input
                  className={styles.formName}
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  placeholder='Please enter your full name'
                  required
                />
              </div>
              <div className={styles.forEmail}>
                <label htmlFor="name" className={styles.labelEmail}>Email</label>
                <input
                  className={styles.formEmail}
                  id="email"
                  email="email"
                  type="email"
                  autocomplete="email"
                  placeholder='Please enter your email address here'
                  required
                />
              </div>
              <div className={styles.forPhone}>
                <label htmlFor="name" className={styles.labelPhone}>Phone</label>
                <input
                  className={styles.formPhone}
                  id="phone"
                  phone="phone"
                  type="phone"
                  autocomplete="phone"
                  placeholder='Please enter your phone number here (optional)'
                  required
                />
              </div>
              <div className={styles.forMsg}>
                <label htmlFor="name" className={styles.labelMessage}>Message</label>
                <input
                  className={styles.formMessage}
                  id="message"
                  message="message"
                  type="textbox"
                  autocomplete="message"
                  placeholder='Please enter your message address here'
                  required
                />
              </div>
              <button
                type="submit"
                className={styles.formSubmit}
              >
                Submit
              </button>
            </form>
          </div>
          <div className={styles.c4Box1}>
            <div className={styles.contactHeader}>
              <h1 className={styles.ourContact}>Our Contact</h1>
              <span className={styles.contactSpan}></span>
            </div>
            <div className={styles.contactNumber}>
              <BsFillTelephoneInboundFill className={styles.emailIco}/>
              <strong>+ 977 9817109084</strong>
            </div>
            <div className={styles.contactEmail}>
              <SiMaildotru className={styles.emailIco}/>
              <strong>themisfitofnightraid@proton.me</strong>
            </div>
            <div className={styles.contactAddress}>
              <FaMapMarkerAlt className={styles.addressMarker}/>
              <strong>Srijana Chowk, Pokhara 8</strong>
            </div>
            <div className={styles.contactLinks}>
              <Link href={"https://facebook.com"}><FaFacebookSquare className={styles.contactSocial}/></Link>
              <Link href={"https://twitter.com"}><FaTwitterSquare className={styles.contactSocial}/></Link>
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