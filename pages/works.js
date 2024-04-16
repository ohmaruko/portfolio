
import styles from '../styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Work_Sans } from 'next/font/google'
import Box2 from '@/components/Box2'
import Link from 'next/link'
import Head from 'next/head'

const workSans = Work_Sans ({subsets: ['latin']})

export default function Works() {
  return (
    <>

      <Head>
        <title>Madoka Nogaki Works</title>
      </Head>

      <div className={styles.container}>
        <Header className={workSans.className}/>
        <main className={`${styles.works} ${workSans.className}`}>
          <div>
            <Link href="./links/tranquify" className={styles.link}>
                <Box2 title='Tranquify' image='/images/tranquify/tranquifyLogo.svg'/>
            </Link>
          </div>
          <div>
            <Link href="./links/dolcedonuts" className={styles.link}>
                <Box2 title='Dolce Donut' image='/images/dolce.png'/>
            </Link>
          </div>
          <div>
            <Link href="./links/howToMeditate" className={styles.link}>
                <Box2 title='How to meditate' image='/images/heart.svg'/>
            </Link>
          </div>
          <div>
            <Link href="./links/hairSunset" className={styles.link}>
                <Box2 title='Hair Sunset' image='/images/hairlogo/coloured1.svg'/>
            </Link>
          </div>
          <div>
            <Link href="./links/filmFestival" className={styles.link}>
                <Box2 title='Film Festival' image='/images/film1.png'/>
            </Link>
          </div>
        </main>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>

    </>
  )
}
