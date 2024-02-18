import styles from '/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import Box from '@/components/Box'
import Image from 'next/image'

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
              <p>Role: UI designer, Prototyping, Logo Mockup</p>
              <p>Team: Two other designers</p>
              <p>Timeline: Nov 2023 - Dec 2023</p>
              <p>Tools: Figma</p>
              <h2>Summary</h2>
              <p>We designed a website mockup for a donut cafe. After brainstorming and ensuring we were aligned with our vision, we created a style guide, wireframes and high-fidelity designs.</p>
              <h2>Style Guide</h2>
              <Image src='/images/dolceFont1.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceFont2.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceColour.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceIdeas.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceLogo.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceMockup.png' alt='styleguide font' width={300} height={168}/>
              <h2>What I learn</h2>
              <p>I learned the basic workflow for designing interfaces and the usage of Figma.</p>
              <h2>What's next</h2>
              <p>In this project, we only developed the website's design, and it is not fully funcional. 
                For the next project, I would like to complete both designing to coding phases.</p>
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
