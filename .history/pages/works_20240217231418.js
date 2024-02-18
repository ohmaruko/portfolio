
import styles from '../styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Open_Sans } from 'next/font/google'
import Box2 from '@/components/Box2'
import Link from 'next/link'

const openSans = Open_Sans ({subsets: ['latin']})

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
        <main className={styles.works}>
          <div>
            <Link href="./links/dolcedonuts" className={styles.link}>
                <Box2 title='Dolce Donut' image='/images/dolcedonuts.png'/>
            </Link>
          </div>
          <div>
            <Link href="./links/goSync" className={styles.link}>
                <Box2 title='GoSync' image='/images/dolcedonuts.png' url="/"/>
            </Link>
          </div>
          <div>
            <Link href="./links/hair" className={styles.link}>
                <Box2 title='Hair Sunset' image='/images/dolcedonuts.png' url="/"/>
            </Link>
          </div>
          <div>
          <Link href="./links/dolcedonuts" className={styles.link}></Link>
            <Box2 title='Film Festival' image='/images/dolcedonuts.png' url="/"/>
          </div>
          <div>
          <Link href="./links/dolcedonuts" className={styles.link}></Link>
            <Box2 title='How to meditate' image='/images/dolcedonuts.png' url="/"/>
          </div>
        </main>

        <div className={styles.outerContainer}>
          <Footer />
        </div>
      </div>

    </>
  )
}
