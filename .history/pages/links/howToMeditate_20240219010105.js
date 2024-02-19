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
        <main className={`${styles.meditation} ${workSans.className}`}>
            <div>
                <Box content={
                    <div>
                        <h2>How to meditate</h2>
                        <div className={styles.heart}>
                          <Image src='/images/heart.svg' alt='heart' fill/>
                        </div>
                        <p>Created a short how to video with graphics.</p>
                        <p>Tools: <strong></strong>Adobe After Effects, Adobe Illustrator</p>
                        <div>
                            <video controls>
                                <source src='/meditation.mp4' type='video/mp4'></source>
                            </video>
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
