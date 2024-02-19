import styles from '/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Work_Sans } from 'next/font/google'
import Link from 'next/link'
import Box from '@/components/Box'
import Image from 'next/image'

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
        <Header />
        <main className={styles.donuts} >
        {/* <main className={`${styles.donuts} ${workSans.className}`}> */}
          <Box content={
            <div>
              <h2>Dolce Donuts</h2>
              <p>
                <Link href="https://www.figma.com/proto/l18aumka9I3yuIv8W5JcGA/DolceDonuts---SET-H?type=design&t=HifTad7UBqVbb5vI-1&scaling=scale-down-width&page-id=0%3A1&node-id=1-16&starting-point-node-id=1%3A16&mode=design"
                  target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Mockup Link</Link>
              </p>
              <Image src='/images/dolceLogo.svg' alt='styleguide font' width={150} height={150}/>
              <h2>Overview</h2>
              <p>Role: UI designer, Prototyping, Logo Mockup</p>
              <p>Team: Two other designers</p>
              <p>Timeline: Nov 2023 - Dec 2023</p>
              <p>Tools: Figma</p>
              <h2>Summary</h2>
              <p>We designed a website mockup for a donut cafe. After brainstorming and ensuring we were aligned with our vision, 
                we created a style guide, wireframes, components and high-fidelity designs.</p>
              <h2>Style Guide</h2>
              <Image src='/images/dolceFont1.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceFont2.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceColour.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceButton.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceIdeas.png' alt='styleguide font' width={300} height={168}/>
              <Image src='/images/dolceMockup.png' alt='styleguide font' width={300} height={168}/>
              <h2>Mock-up</h2>
              <p>
                <Link href="https://www.figma.com/proto/l18aumka9I3yuIv8W5JcGA/DolceDonuts---SET-H?type=design&t=HifTad7UBqVbb5vI-1&scaling=scale-down-width&page-id=0%3A1&node-id=1-16&starting-point-node-id=1%3A16&mode=design"
                  target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Link</Link>
              </p>
              <h2>What I learn</h2>
              <p>I learned the basic workflow of designing website and the usage of Figma.
                Additionally, I gained insight into the importance of style guide in ensuring consistent design.
                Communicate tangible ideas can be challenging, but a style guide helps the team 
                communication.
              </p>
              <h2>What's next</h2>
              <p>In this project, we only developed the website's design, and it is not fully funcional. 
                For the next project, I aim to complete both the design to coding phases, leveraging my coding skills.</p>
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
