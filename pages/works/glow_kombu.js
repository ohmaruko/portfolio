import styles from '/styles/works/GlowKombu.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Work_Sans } from 'next/font/google'
import Image from 'next/image'
const workSans = Work_Sans ({subsets: ['latin']})
import Box from '@/components/Box'
import Head from 'next/head'

export default function GlowKombu() {
  return (
    <div>

      <Head>
        <title>Glow Kombu</title>
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={`${styles.mainContainer} ${workSans.className}`}>
            <div>
                <Box content={
                    <div>
                        <h2>Glow Kombu</h2>
                        <p>November 2024</p>
                        <div>
                            <img className={styles.img1} src='/images/glowkombu/glowkombu_straight.png' alt='GlowKombu Kombucha'/>
                        </div>
                        <div className={styles.img2}>
                            <img src='/images/glowkombu/mockup_face_ginger.png' alt='GlowKombu Kombucha'/>
                            <img src='/images/glowkombu/mockup_side_ginger.png' alt='GlowKombu Kombucha'/>
                        </div>
                        <div className={styles.img2}>
                            <img src='/images/glowkombu/mockup_face_blueberry.png' alt='GlowKombu Kombucha'/>
                            <img src='/images/glowkombu/mockup_side_blueberry.png' alt='GlowKombu Kombucha'/>
                        </div>
                        <div className={styles.img2}>
                            <img src='/images/glowkombu/mockup_face_mango.png' alt='GlowKombu Kombucha'/>
                            <img src='/images/glowkombu/mockup_side_mango.png' alt='GlowKombu Kombucha'/>
                        </div>
                        <img className={styles.img1} src='/images/glowkombu/dieline.png' alt='GlowKombu Kombucha'/>
                    </div>
                }/>
            </div>
        </main>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>

    </div>
  )
}
