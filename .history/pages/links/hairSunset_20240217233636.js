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
        <main className={styles.hair}>
            <div>
                <Box content={
                    <div>
                        <Image src='/images/hair1.png' alt='Hair Sunset Ad1' width={300} height={388}/>
                        <Image src='/images/hair2.png' alt='Hair Sunset Ad1' width={300} height={388}/>
                        <Image src='/images/hair3.png' alt='Hair Sunset Ad1' width={300} height={388}/>
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
