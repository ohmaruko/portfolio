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
                        <h1>How to meditate</h1>
                        <p>Created a video</p>
                        <p>Used san serif (<a href="https://fonts.google.com/specimen/Rubik" target='_blank'>Rubik</a>) for the left one 
                        and serif (<a href="https://fonts.google.com/specimen/Bitter" target='_blank'>Bitter</a>) for the right.</p>
                        <Image src='/images/film1.png' alt='Hair Sunset Ad1' width={400} height={400}/>
                        <Image src='/images/film2.png' alt='Hair Sunset Ad1' width={400} height={400}/>

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
