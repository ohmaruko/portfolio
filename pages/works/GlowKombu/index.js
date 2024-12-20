import styles from './GlowKombu.module.css'
import Box from '@/components/Box'
import Head from 'next/head'

export default function GlowKombu() {
  return (
    <div>

      <Head>
        <title>Glow Kombu</title>
      </Head>

      <div className={styles.container}>
        {/* <div className={styles.innerContainer}>

        </div> */}
        <Box content={
            <div>
                <h1>Glow Kombu</h1>
                <h1>Kombucha Can Design</h1>
                <p>November 2024</p>
                <div className={styles.mainImage} >
                    <img src='/images/glowkombu/glowkombu_straight.png' alt='GlowKombu Kombucha'/>
                </div>
                <div className={styles.frontSide}>
                    <img src='/images/glowkombu/mockup_face_ginger.png' alt='GlowKombu Kombucha'/>
                    <img src='/images/glowkombu/mockup_side_ginger.png' alt='GlowKombu Kombucha'/>
                </div>
                <div className={styles.mainImage} >
                    <img src='/images/glowkombu/glowkombu_wide.png' alt='GlowKombu Kombucha'/>
                </div>
            </div>
        }/>
      </div>
    </div>
  )
}
