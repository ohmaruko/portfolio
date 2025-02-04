import styles from './FilmFestival.module.css'
import Image from 'next/image'
import Box from '@/components/Box'
import Head from 'next/head'

export default function Works() {
  return (
    <div>

      <Head>
        <title>Film Festival | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
          <div className={styles.innerContainer}>
            <Box backButton={true} content={
                <div>
                    <h1>Film Festival</h1>
                    <h1>Typography Layout</h1>
                    <p>February 2024</p>
                    <div className={styles.filmAdsContainer}>
                      <div className={styles.filmAds}>
                        <img src='/images/film1.png' alt='Hair Sunset Ad1' />
                      </div>
                      <div className={styles.filmAds}>
                        <img src='/images/film2.png' alt='Hair Sunset Ad2' />
                      </div>
                    </div>
                    <p>Designed two variations of typography layout for a film festival.</p>
                    <p><strong>Fonts</strong>: <a href="https://fonts.google.com/specimen/Rubik" target='_blank'>Rubik</a>,
                    <a href="https://fonts.google.com/specimen/Bitter" target='_blank'> Bitter</a></p>
                    <p><strong>Tools</strong>: Adobe Illustrator, Grid layout</p>
                </div>
            }/>
          </div>
      </div>

    </div>
  )
}
