import styles from '/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
const openSans = Open_Sans ({subsets: ['latin']})
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
        <Header className={openSans.className}/>
        <main className={styles.meditation}>
            <div>
                <Box content={
                    <div>
                        <h2>How to meditate</h2>
                        <div>
                          <Image src='/images/heart.svg' alt='heart' width={200} height={200}/>
                        </div>
                        <p>Created a short how to video with graphics using Adobe After Effects and Adobe Illustrator.</p>
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
