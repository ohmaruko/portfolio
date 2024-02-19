
import styles from '../styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Work_Sans } from 'next/font/google'
import Box2 from '@/components/Box2'
import Link from 'next/link'

const workSans = Work_Sans ({subsets: ['latin']})

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
        <Header>
        <main className={styles.works}>
          <div>
            <Link href="./links/dolcedonuts" className={styles.link}>
                <Box2 title='Dolce Donut' image='/images/dolce.png'/>
            </Link>
          </div>
          {/* <div>
            <Link href="./links/goSync" className={styles.link}>
                <Box2 title='GoSync' image='/images/goSync.png' url="/"/>
            </Link>
          </div> */}
          <div>
            <Link href="./links/hairSunset" className={styles.link}>
                <Box2 title='Hair Sunset' image='/images/hairlogo/coloured1.svg' url="/"/>
            </Link>
          </div>
          <div>
            <Link href="./links/filmFestival" className={styles.link}>
                <Box2 title='Film Festival' image='/images/film1.png' url="/"/>
            </Link>
          </div>
          <div>
            <Link href="./links/howToMeditate" className={styles.link}>
                <Box2 title='How to meditate' image='/images/heart.svg' url="/"/>
            </Link>
          </div>
        </main>

        <div className={styles.outerContainer}>
          <Footer />
        </div>
      </div>

    </>
  )
}
