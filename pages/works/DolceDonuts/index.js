import styles from './DolceDonuts.module.css'
import Link from 'next/link'
import Box from '@/components/Box'
import Image from 'next/image'
import Head from 'next/head'
import AnimatedButton from '@/components/AnimatedButton'
import { FaGithub } from "react-icons/fa";

export default function DolceDonuts() {
  return (
    <div>
      <Head>
        <title>Dolce Donuts</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
            <Box content={
              <div>
                <h1>Dolce Donuts</h1>
                <div className={styles.logo}>
                  <img src='/images/dolceLogo.svg' alt='styleguide font' />
                </div>
                <h2>Overview</h2>
                <p>Role: UI designer, Prototyping, Logo Mockup</p>
                <p>Team: Two other designers</p>
                <p>Timeline: November 2023 - December 2023 (Development ongoing as of October 2024)</p>
                <p>Tools: Figma</p>
                <h2>Summary</h2>
                <p>We designed a website mockup for a donut cafe. After brainstorming and ensuring we were aligned with our vision, 
                  we created a style guide, wireframes, components and high-fidelity designs.</p>
                <h2>Style Guide</h2>
                <div className={styles.styleGuide}>
                  <Image src='/images/dolceFont1.png' alt='styleguide font' width={280} height={159}/>
                  <Image src='/images/dolceFont2.png' alt='styleguide font' width={280} height={159}/>
                  <Image src='/images/dolceColour.png' alt='styleguide font' width={280} height={159}/>
                  <Image src='/images/dolceButton.png' alt='styleguide font' width={280} height={159}/>
                  <Image src='/images/dolceIdeas.png' alt='styleguide font' width={280} height={159}/>
                  <Image src='/images/dolceMockup.png' alt='styleguide font' width={280} height={159}/>
                </div>
                <h2>Mock-up</h2>
                <div className={styles.btn}>
                  <AnimatedButton href='https://www.figma.com/proto/l18aumka9I3yuIv8W5JcGA/DolceDonuts---SET-H?type=design&t=HifTad7UBqVbb5vI-1&scaling=scale-down-width&page-id=0%3A1&node-id=1-16&starting-point-node-id=1%3A16&mode=design' targetBlank={true}>👉 Figma Mockup</AnimatedButton>
                  <AnimatedButton href='https://dolcedonuts.vercel.app/' targetBlank={true}>👉 Coded Website</AnimatedButton>
                  <AnimatedButton href='https://github.com/Crystalhtc/dolcedonuts' targetBlank={true}><FaGithub /></AnimatedButton>
                </div>
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
        </div>
        </div>
    </div>
  )
}
