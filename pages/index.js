import styles from '../styles/Home.module.css'
import WorkCard from '@/components/WorkCard'
import Link from 'next/link'
import Head from 'next/head'

export default function Works() {

  return (
    <>
      <Head>
        <title>Madoka Nogaki: A branding & web designer based in Vancouver/Victoria</title>
      </Head>
      <div className={styles.worksContainer}>
          <WorkCard title='Spotlight' image='/images/spotlight/thumbnail.svg'  href='./works/Spotlight' 
            tags={["UX/UI Design", "Logo Design"]} targetBlank={false} summary="Kombucha can design" />
          <WorkCard title='Glow Kombu' image='/images/glowkombu/glowkombu.png' href="./works/GlowKombu" 
            targetBlank={false} tags={["Packaging Design"]} summary="Kombucha can design" />
          <WorkCard title='Remedify' image='/images/remedify/remedify_thumbnail.png' href="./works/Remedify" 
            targetBlank={false} tags={["UX/UI Design", "Mobile App"]}/>
          <WorkCard title='Tranquify' image='/images/tranquify/tranquifyLogo.svg' href="./works/Tranquify"
            targetBlank={false}
            tags={["Graphic Design", "UX/UI Design", "Frontend Development", "Mobile App"]}
            summary="A personalized journey to better mental health through mood tracking and tailored meditation content."
            />
          <WorkCard title='Hair Sunset' image='/images/hair/hair_sunset_business_card_square.png' href="./works/HairSunset"
            targetBlank={false} tags={["Graphic Design", "Logo Design"]}
            summary="A warm, inviting logo and campaign ad series for a family-friendly hair salon."
          />
          <WorkCard title='Harmony In Design' image='/images/print_magazine_square.png' href="./works/HarmonyInDesign" 
            targetBlank={false} tags={["Magazine Design", "Print", "Digital"]}/>
          <WorkCard title='Konmari Method' image='/images/konmari.svg' href="./works/Konmari" 
            targetBlank={false} tags={["Motion Graphic Design"]}/>
          <WorkCard title='How to meditate' image='/images/heart.svg' href="./works/HowToMeditate" 
            targetBlank={false} tags={["Motion Graphic Design"]}/>
          <WorkCard title='Film Festival' image='/images/film1.png' href="./works/FilmFestival" 
            targetBlank={false} tags={["Typography Layout"]}/>
          <WorkCard title='Dolce Donut' image='/images/dolce.png' href="./works/DolceDonuts" 
            targetBlank={false} tags={["UX/UI Design", "Frontend Development"]}/>
          <WorkCard title='West Point Hotel' image='/images/west-point-hotel.svg'  href="https://west-point-hotel.vercel.app/" 
            targetBlank={true} tags={["WordPress", "UX/UI Design", "Website"]}/>
          <WorkCard title='The World of Studio Ghibli' image='/images/ghibli.jpg' href="https://the-world-of-studio-ghibli.vercel.app/" 
            targetBlank={true} tags={["WordPress", "UX/UI Design", "Blog"]}/>
      </div>
    </>
  )
}
