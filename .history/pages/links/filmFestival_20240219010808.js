import styles from '/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Work_Sans } from 'next/font/google'
import Image from 'next/image'
const workSans = Work_Sans ({subsets: ['latin']})
import Box from '@/components/Box'

export default function Works() {
  return (
    <>

      <head>
        <title>Madoka Nogaki Portfolio</title>
        <meta name="description" content="Portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </head>

      <div className={styles.container}>
        <Header />
        <main className={`${styles.film} ${workSans.className}`}>
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

        <div className={styles.outerContainer}>
          <Footer />
        </div>
      </div>

    </>
  )
}
