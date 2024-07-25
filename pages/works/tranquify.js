import styles from '/styles/works/Tranquify.module.css'
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
                        </div>
                        <h2>Overview</h2>
                        <p>Role: UI/UX Designer, Frontend Developer</p>
                        <p>Team: Two other teammates in the same roles</p>
                        <p>Timeline: Jan 2024 - April 2024</p>
                        <p>Tools: Figma, NextJS, Adobe Illustrator, Adobe After Effects</p>
                        <Link href="https://tranquify.vercel.app/" target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Visit our app mockup</Link>
                        <h2>About</h2>
                        <div className={styles.about}>
                          <Image src='/images/tranquify/mascots.svg' alt="Tranquify Mascots" width={350} height={100} />
                          <p>Tranquify is a mobile mood tracking and meditation app designed to support mental health. 
                            With Tranquify, users can easily record their moods throughout the day and 
                            access a variety of meditation content tailored to their emotional state. 
                            After logging their moods, users receive personalized messages and suggestions, 
                            empowering them to take proactive steps for their well-being.</p>
                        </div>
                        <h2>1. UI/UX</h2>
                          <p>We prioritize a seamless and intuitive user flow, ensuring that navigation within the app feels natural and effortless. 
                            Our design choices align with the needs and preferences of our target audience, 
                            while our style guide ensures that the app's functionality and visual elements are consistent 
                            with our brand identity.</p>
                          <p>
                              <Link href="https://www.figma.com/proto/5tbiubXaIbwy4mL49rAXmZ/MDIA-2106-%E2%80%93-Tranquify-Latest(Madoka)?node-id=157-971&t=BMzEVAz554cAtwus-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=157%3A971"
                              target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Visit our figma prototype</Link>
                          </p>
                          <div className={styles.sliderContainer}>
                            <div  className={styles.slider}>
                              <Image src='/images/tranquify/page_landing.svg' alt="landing page" width={200} height={400} />
                              <Image src='/images/tranquify/page_onboarding.svg' alt="onboarding page" width={200} height={400} />
                              <Image src='/images/tranquify/page_home.svg' alt="home page" width={200} height={400} />
                              <Image src='/images/tranquify/page_moodtracker.svg' alt="mood tracking page" width={200} height={400} />
                              <Image src='/images/tranquify/page_meditation.svg' alt="meditation page" width={200} height={400} />
                              <Image src='/images/tranquify/page_meditationsuggestion.svg' alt="meditation suggestion page" width={200} height={400} />
                              <Image src='/images/tranquify/page_meditationmood.svg' alt="meditation mood and goal page" width={200} height={400} />
                              <Image src='/images/tranquify/page_meditationsearch.svg' alt="meditation search page" width={200} height={400} />
                              <Image src='/images/tranquify/page_calendar.svg' alt="calender page" width={200} height={400} />
                              <Image src='/images/tranquify/page_setting.svg' alt="setting page" width={200} height={400} />
                            </div>
                          </div>
                        <h2>2. Branding</h2>
                        <div>
                          <Image src='/images/tranquify/logo_banner.svg' alt="logo banner" width={700} height={400} />
                          <div className={styles.color}>
                            <p>
                            The color palette for Tranquify was carefully chosen to evoke calmness and stability, 
                            enhancing the app’s soothing and supportive experience for users.
                            </p>
                            <Image src='/images/tranquify/color_palette.svg' alt="color palette" width={400} height={400} />
                          </div>
                          <Image src='/images/tranquify/buttons.svg' alt="buttons" width={700} height={200} />
                          <p><Link href='https://tranquify-style-guide.vercel.app/' target='_blank'>Visit our full style guide</Link></p>
                        </div>
                        <h2>3. User Testing</h2>
                        <p>
                          During our user testing, participants were asked to complete six tasks using the Figma mockups of Tranquify. 
                          We identified some main issues through their interactions. Based on the feedback received, 
                          we made key adjustments to the design and implemented these improvements in the frontend development.
                        </p>
                        <div>
                          <div className={styles.testing}>
                            <Image src='/images/tranquify/user_testing_meditation.svg' alt="meditation page before" width={200} height={350} />
                            <Image src='/images/tranquify/page_meditation.svg' alt="meditation page after" width={200} height={350} />
                            <p>
                              1. Labels were added to each section for improved clarity and navigation.
                            </p>
                          </div>
                          <div className={styles.testing}>
                            <Image src='/images/tranquify/user_testing_meditationplay.svg' alt="meditation play page before" width={200} height={350} />
                            <Image src='/images/tranquify/page_meditationplay.svg' alt="meditation play page after" width={200} height={350} />
                            <p>
                              2. We made the heart icons more prominent and accessible throughout the app.
                            </p>
                          </div>
                          <div className={styles.testing}>
                            <Image src='/images/tranquify/user_testing_home.svg' alt="home page before" width={200} height={350} />
                            <Image src='/images/tranquify/page_home.svg' alt="home page after" width={200} height={350} />
                            <p>
                              3. The weather section on the home page was resized to reduce confusion.
                            </p>
                          </div>
                        </div>
                        <h2>4. Frontend Developing</h2>
                        <Link href="https://tranquify.vercel.app/" target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Visit our app</Link>
                        <p>
                          This project marked my first experience transitioning from design to frontend development, 
                          where I gained a fundamental understanding of React and Next.js. 
                          Additionally, I learned how to integrate APIs to enhance app functionality and user experience.
                        </p>
                        <h2>What's next?</h2>
                        <p>
                        I am eager to deepen my understanding of how frontend and backend systems connect and work together, 
                        aiming to leverage my frontend development skills in real-world environments. 
                        </p>
                        <p>
                          Additionally, I plan to refine my design and branding skills to create more engaging and attractive interfaces. 
                          I’ve learned the challenge of balancing my design personality with the needs of users and team members.
                        </p>
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
