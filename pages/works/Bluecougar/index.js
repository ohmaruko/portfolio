import styles from './Bluecougar.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Spotlight() {
    const [imgNum, setImgNum] = useState(10)
    
      useEffect(() => {
        const interval = setInterval(() => {
            setImgNum((prevImgNum) => (prevImgNum === 1 ? 10 : prevImgNum - 1));
        }, 700);
        return () => clearInterval(interval);
      }, [])

    return (
    <div>

        <Head>
            <title>BLURCOUGAR | Madoka Nogaki</title>
        </Head>

        <div className={styles.container}>
            <Box  backButton={true} content={
                <div>
                    <h1>BLUECOUGAR</h1>
                    <h1>Bookcover Design</h1>
                    <div className={styles.date}>
                        <p>October, 2024</p>
                        <p>Tools: Photoshop</p>
                    </div>
                    <img src='/images/bluecougar/mockup.png' alt="BLUECOUGAR Bookcover"  />


                    <div className={styles.section}>
                        <h2>Process</h2>
                        <div className={styles.process}>
                            <div className={styles.originalImg}>
                                <img src='/images/bluecougar/cougar.jpeg' alt="BLUECOUGAR Bookcover"  />
                                <img src='/images/bluecougar/bird.jpeg' alt="BLUECOUGAR Bookcover"  />
                                <img src='/images/bluecougar/mountain_sheep.jpeg' alt="BLUECOUGAR Bookcover"  />
                            </div>
                            <div className={styles.beforeAfter}>
                                <img src={`/images/bluecougar/process/${imgNum}.png`} alt='Creative Process' key={imgNum}/>
                                <img src='/images/bluecougar/bookcover.png' alt="BLUECOUGAR Bookcover"  />
                            </div>
                        </div>
                    </div>
                </div>
            }/>
        </div>

    </div>
    )
}
