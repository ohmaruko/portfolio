import styles from '/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Work_Sans } from 'next/font/google'
import Image from 'next/image'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'

const workSans = Work_Sans ({subsets: ['latin']})

export default function Works() {
  return (
    <div>

      <Head>
        <title>Tranquify</title>
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={`${styles.mainContainer} ${workSans.className}`}>
            <div>
                <Box content={
                    <div>
                        <div className={styles.titleOfWork}>
                            <h2>Tranquify</h2>
                            <Image src='/images/tranquify/mascots.svg' alt="Tranquify Mascots" width={500} height={100} />
                        </div>
                        <h2>Overview</h2>
                        <p>Role: UI/UX Designer, Frontend Developer</p>
                        <p>Team: Two other teammates in the same roles</p>
                        <p>Timeline: Jan 2024 - In progress</p>
                        <p>Tools: Figma, NextJS, Adobe Illustrator, Adobe After Effects</p>
                        <Link href="https://tranquify.vercel.app/" target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Visit our app mockup</Link>
                        <h2>Summary</h2>
                        <p>We're currently in the process of developing a mood tracking and meditation app designed to support mental health. 
                            Our journey began with brainstorming sessions to refine our concept, 
                            followed by the creation of personas, a style guide, and detailed Figma mockups to guide our design process. 
                            Currently, we're actively engaged in user testing while simultaneously progressing our frontend development using Next.js.</p>
                        <h2>Style Guide</h2>
                        <p>Our comprehensive guide covers everything from colour palettes and typography to app mascots. 
                            By following to these guidelines, we ensure consistency and coherence across all aspects of the app's interface, 
                            enhancing user experience and brand identity.</p>
                        <p><Link href='https://tranquify-style-guide.vercel.app/' target='_blank'>Visit our full style guide</Link></p>
                        <div className={styles.tranquifyStyleGuide}>
                            <Image src='/images/tranquify/logos.svg' alt="Tranquify Logos" width={290} height={200} />
                            <Image src='/images/tranquify/typography.svg' alt="Tranquify Logos" width={290} height={150} />
                            <Image src='/images/tranquify/buttons.svg' alt="Tranquify Logos" width={500} height={100} />
                        </div>
                        <h2>Figma prototype</h2>
                        <p>We ensure that app's functionality resonate with our target audience  
                            while our designs reflect our brand identity by leveraging our style guide. 
                            Prioritizing a natural flow throughout the app, we enable users to navigate intuitively. 
                            Additionally, we emphasize inclusivity by incorporating customizable options for visuals, sounds, and language preferences, 
                            ensuring that every user feels welcomed and accommodated.</p>
                        <p>
                            <Link href="https://www.figma.com/proto/TKkB4s3xcb0ILssL8EJnpZ/Tranquify-(Madoka)?type=design&node-id=157-971&t=HKCX43am6eU5htbw-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=157%3A971&mode=design"
                            target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Visit our figma prototype</Link>
                        </p>
                        {/* <h2>Usability Testing</h2>
                        <p>In progress
                        </p> */}
                        <h2>Mockup</h2>
                        <Link href="https://tranquify.vercel.app/" target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Visit our app</Link>
                    </div>
                }/>
            </div>
        </main>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>

    </div>
  )
}
