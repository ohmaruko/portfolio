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
                        <h1>Hair Sunset</h1>
                        <p>Creted</p>
                        <Image src='/images/hair1.png' alt='Hair Sunset Ad1' width={300} height={388}/>
                        <Image src='/images/hair2.png' alt='Hair Sunset Ad1' width={300} height={388}/>
                        <Image src='/images/hair3.png' alt='Hair Sunset Ad1' width={300} height={388}/>
                        <div>
                            <div className={styles.logoContainer}>
                                <h3>Ideas</h3>
                                <div className={styles.logoInner}>
                                    <Image src='/images/hairlogo/idea1.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/idea2.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/idea3.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/idea4.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/idea5.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                </div>
                            </div>
                            <div className={styles.logoContainer}>
                                <h3>Variation</h3>
                                <div className={styles.logoInner}>
                                    <Image src='/images/hairlogo/BW1.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/coloured1.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/complex1.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                </div>
                                <div className={styles.logoInner}>
                                    <Image src='/images/hairlogo/BW2.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/coloured2.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/complex2.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                </div>
                                <div className={styles.logoInner}>
                                    <Image src='/images/hairlogo/BW3.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/coloured3.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                    <Image src='/images/hairlogo/complex3.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                                </div>
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
