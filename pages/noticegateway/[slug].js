import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
// Importing Components 
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styles from '@/styles/NoticePage.module.css'
const slug = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [notice, setNotice] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getNotice?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setNotice(parsed)
            })
    }, [router.isReady, router.query])

    return (
        <>
            <Head>
                <title>School Site</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.navHolder}>
                <Navbar></Navbar>
            </div>
            <div className={styles.slugBody}>
                <div className={styles.section0}>
                    <h1 className={styles.heading}>{notice && notice.title}</h1>
                    <span className={styles.divider}></span>
                </div>
                <div className={styles.section1}>{notice && notice.content}</div>
            </div>
            <div className={styles.footerHolder}>
                <Footer></Footer>
            </div>
        </>
    )
}

export default slug