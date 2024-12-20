import styles from '../styles/Home.module.css'
import WorkCard from '@/components/WorkCard'
import Link from 'next/link'
import Head from 'next/head'

export default function Works() {
  return (
    <>
      <Head>
        <title>Madoka Nogaki Works</title>
      </Head>
      <div className={styles.worksContainer}>
        <div>
          <Link href="./works/GlowKombu" className={styles.link}>
              <WorkCard title='Glow Kombu' image='/images/glowkombu/glowkombu.png' tags={["Packaging Design"]}/>
          </Link>
        </div>
        <div>
          <Link href="./works/Tranquify" className={styles.link}>
              <WorkCard title='Tranquify' image='/images/tranquify/tranquifyLogo.svg' tags={["Graphic Design", "UI UX Design", "Frontend Development", "Mobile App"]}/>
          </Link>
        </div>
        <div>
          <Link href="./works/HairSunset" className={styles.link}>
              <WorkCard title='Hair Sunset' image='/images/hair/hair_sunset_business_card_square.png' tags={["Graphic Design", "Logo Design"]}/>
          </Link>
        </div>
        <div>
          <Link href="./works/Konmari" className={styles.link}>
              <WorkCard title='Konmari Method' image='/images/konmari.svg' tags={["Motion Graphic Design"]}/>
          </Link>
        </div>
        <div>
          <Link href="./works/HowToMeditate" className={styles.link}>
              <WorkCard title='How to meditate' image='/images/heart.svg' tags={["Motion Graphic Design"]}/>
          </Link>
        </div>
        <div>
          <Link href="./works/FilmFestival" className={styles.link}>
              <WorkCard title='Film Festival' image='/images/film1.png' tags={["Typography Layout"]}/>
          </Link>
        </div>
        <div>
          <Link href="./works/HarmonyInDesign" className={styles.link}>
              <WorkCard title='Harmony In Design' image='/images/print_magazine_square.png' tags={["Magazine Design", "Print", "Digital"]}/>
          </Link>
        </div>
        <div>
          <Link href="./works/DolceDonuts" className={styles.link}>
              <WorkCard title='Dolce Donut' image='/images/dolce.png' tags={["UI UX Design", "Frontend Development"]}/>
          </Link>
        </div>
        <div>
          <Link href="https://west-point-hotel.vercel.app/" target="_blank" className={styles.link}>
              <WorkCard title='West Point Hotel' image='/images/west-point-hotel.svg' tags={["WordPress", "UI UX Design", "Website"]}/>
          </Link>
        </div>
        <div>
          <Link href="https://the-world-of-studio-ghibli.vercel.app/" target="_blank" className={styles.link}>
              <WorkCard title='The World of Studio Ghibli' image='/images/ghibli.jpg' tags={["WordPress", "UI UX Design", "Blog"]}/>
          </Link>
        </div>
      </div>
    </>
  )
}
