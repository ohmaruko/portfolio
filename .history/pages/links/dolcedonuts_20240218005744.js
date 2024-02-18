import styles from '/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import Box from '@/components/Box'

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
        <main className={styles.donuts}>
          <Box content={
            <div>
              <h1>Dolce Donuts</h1>
              <Link href="https://www.figma.com/proto/l18aumka9I3yuIv8W5JcGA/DolceDonuts---SET-H?type=design&t=HifTad7UBqVbb5vI-1&scaling=scale-down-width&page-id=0%3A1&node-id=1-16&starting-point-node-id=1%3A16&mode=design"
                target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Mockup Link</Link>
              <h2>Overview</h2>
              <p>Role: UI designer, Prototyping, Logo mockup</p>
              <p>Team: other two designers</p>
              <p>Timeline: November 2023 - December 2023</p>
              <p>Tools: Figma</p>
              <h2>Summary</h2>
              <p>We designed a website mockup for a donut cafe. After brainstorming and ensuring we were aligned in our vision, we crafted a style guide, created wireframes, and high-fidelity designs.</p>
              <h2>What I learn</h2>
              <p>I learned a basic workflow for designing interface and usage of Figma.</p>
              <h2>What's next</h2>
              <p>In this project, we only developed the design of the </p>
            </div>
          }/>
        </main>

        <div className={styles.outerContainer}>
          <Footer />
        </div>
      </div>

    </>
  )
}
