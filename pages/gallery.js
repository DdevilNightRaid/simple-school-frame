import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Gallery.module.css'

// Importing Components 
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
export default function MyComponent() {
  const [images, setImages] = useState([]);

  async function fetchImages() {
    const response = await fetch('http://localhost:3002/api/images');
    const { images } = await response.json();
    setImages(images);
  }

  useEffect(() => {
    fetchImages();
  }, []);

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
      <div className={styles.galleryBody}>
        <div className={styles.section0}>
          <h1 className={styles.heading1}>Our Gallery</h1>
          <span className={styles.divider}></span>
        </div>
        <div className={styles.section1}>
          {images.map((image, index) => (
            <div key={index}>
              <Link href={'/'}>
                <div className={styles.picContainer}>
                  <Image
                    src={`data:image/jpeg;base64,${image.data}`}
                    width={333}
                    height={333}
                    alt={`Image ${index}`}
                    className={styles.pics}
                  />
                </div>
              </Link>
            </div>
            // console.log(image)
          ))}
        </div>
      </div>
      <div className={styles.footerHolder}>
        <Footer></Footer>
      </div>
    </>
  );
}