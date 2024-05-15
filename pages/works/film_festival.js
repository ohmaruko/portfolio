import styles from '/styles/works/Film_festival.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Work_Sans } from 'next/font/google'
import Image from 'next/image'
const workSans = Work_Sans ({subsets: ['latin']})
import Box from '@/components/Box'
import Head from 'next/head'

export default function Works() {
  return (
    <div>

      <Head>
        <title>Film Festival</title>
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={`${styles.mainContainer} ${workSans.className}`}>
            <div>
                <Box content={
                    <div>
                        <h2>Film Festival</h2>
                        <p>Designed two variations of typography layout for film festival.</p>
                        <p>Fonts: San Serif (<a href="https://fonts.google.com/specimen/Rubik" target='_blank'>Rubik</a>),
                         Serif (<a href="https://fonts.google.com/specimen/Bitter" target='_blank'>Bitter</a>).</p>
                        <p>Tools: Adobe Illustrator, Grid layout</p>
                        <div className={styles.filmAdsContainer}>
                          <div className={styles.filmAds}>
                            <Image src='/images/film1.png' alt='Hair Sunset Ad1' fill/>
                          </div>
                          <div className={styles.filmAds}>
                            <Image src='/images/film2.png' alt='Hair Sunset Ad2' fill/>
                          </div>
                        </div>
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
