import styles from './Mogumogu.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Spotlight() {
    const [imgNum, setImgNum] = useState(1)
    
      useEffect(() => {
        const interval = setInterval(() => {
            setImgNum((prevImgNum) => (prevImgNum === 3 ? 1 : prevImgNum + 1));
        }, 1000);
        return () => clearInterval(interval);
      }, [])

    return (
    <div>

        <Head>
            <title>MOGUMOGU | Madoka Nogaki</title>
        </Head>

        <div className={styles.container}>
            <Box  backButton={true} content={
                <div>
                    <h1>MOGUMOGU</h1>
                    <h1>Menu Design</h1>
                    <div className={styles.date}>
                        <p>April, 2024</p>
                        <p>Tools: InDesign, Illustrator</p>
                    </div>
                    <img src='/images/mogumogu/mockup.png' alt="MOGUMOGU Menu Mockup"  />


                    <div className={styles.section}>
                        <div className={styles.allPages}>
                            <img src={`/images/mogumogu/menu${imgNum}.jpg`} alt='MOGUMOGU all menu pages' key={imgNum}/>
                        </div>
                    </div>
                </div>
            }/>
        </div>

    </div>
    )
}
