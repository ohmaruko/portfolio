
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
        <Header className={styles.header}/>
        <main className={`${styles.works} ${workSans.className}`}>
          <div>
            <Link href="./works/tranquify" className={styles.link}>
                <Box2 title='Tranquify' image='/images/tranquify/tranquifyLogo.svg' tags={["UI UX Design", "Frontend Development"]}/>
            </Link>
          </div>
          <div>
            <Link href="./works/hair_sunset" className={styles.link}>
                <Box2 title='Hair Sunset' image='/images/hairlogo/coloured1-2.svg' tags={["Graphic Design"]}/>
            </Link>
          </div>
          <div>
            <Link href="./works/konmari" className={styles.link}>
                <Box2 title='Konmari Method' image='/images/konmari.svg' tags={["Motion Graphic Design"]}/>
            </Link>
          </div>
          <div>
            <Link href="./works/how_to_meditate" className={styles.link}>
                <Box2 title='How to meditate' image='/images/heart.svg' tags={["Motion Graphic Design"]}/>
            </Link>
          </div>
          <div>
            <Link href="./works/dolce_donuts" className={styles.link}>
                <Box2 title='Dolce Donut' image='/images/dolce.png' tags={["UI UX Design"]}/>
            </Link>
          </div>
          <div>
            <Link href="./works/film_festival" className={styles.link}>
                <Box2 title='Film Festival' image='/images/film1.png' tags={["Graphic Design"]}/>
            </Link>
          </div>
          <div>
            <Link href="https://west-point-hotel.vercel.app/" target="_blank" className={styles.link}>
                <Box2 title='West Point Hotel' image='/images/west-point-hotel.svg' tags={["Wordpress", "UI UX Design"]}/>
            </Link>
          </div>
          <div>
            <Link href="https://the-world-of-studio-ghibli.vercel.app/" target="_blank" className={styles.link}>
                <Box2 title='The World of Studio Ghibli' image='/images/ghibli.svg' tags={["Wordpress", "UI UX Design"]}/>
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
