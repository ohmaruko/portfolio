import styles from './Tranquify.module.css'
import Image from 'next/image'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'


export default function Works() {
  return (
    <div>

      <Head>
        <title>Tranquify</title>
      </Head>

      <div className={styles.container}>
          <div className={styles.innerContainer}>
              <Box content={
                  <div>
                      <div className={styles.titleOfWork}>
                          <img src='/images/tranquify/horizontalLogo.svg' alt='Tranquify Logo' />
                      </div>
                      <h2>Overview</h2>
                      <p>Role: Graphic Designer, UI/UX Designer, Frontend Developer</p>
                      <p>Team: Two other teammates</p>
                      <p>Timeline: Jan 2024 - April 2024</p>
                      <p>Tools: Figma, NextJS, Adobe Illustrator, Adobe After Effects</p>
                      <div className={styles.btn}>
                        <Link href='https://tranquify.vercel.app/' target='_blank'>Visit our app mockup</Link>
                        <Link href='https://github.com/ohmaruko/Tranquify' target='_blank' className={styles.githubLogo}>
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                          </svg>
                        </Link>
                      </div>
                      <h2>About</h2>
                      <div className={styles.about}>
                        <img src='/images/tranquify/mascots.svg' alt="Tranquify Mascots" />
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
                      <div className={styles.branding}>
                        <img className={styles.brandingImage} src='/images/tranquify/logos.svg' alt="logo banner" />
                        <div className={styles.color}>
                          <p>
                          The color palette for Tranquify was carefully chosen to evoke calmness and stability, 
                          enhancing the app’s soothing and supportive experience for users.
                          </p>
                          <img className={styles.colorImage} src='/images/tranquify/color_palette.svg' alt="color palette" />
                        </div>
                        <img className={styles.brandingImage} src='/images/tranquify/buttons.svg' alt="buttons" />
                        <p><Link href='https://tranquify-style-guide.vercel.app/' target='_blank'>Visit our full style guide</Link></p>
                      </div>
                      <h2>3. User Testing</h2>
                      <p>
                        During our user testing, participants were asked to complete six tasks using the Figma mockups of Tranquify. 
                        We identified some main issues through their interactions. Based on the feedback received, 
                        we made key adjustments to the design and implemented these improvements in the frontend development.
                      </p>
                      <div className={styles.testingsContainer}>
                        <div className={styles.testing}>
                          <div className={styles.testingImages}>
                            <img src='/images/tranquify/user_testing_meditation.svg' alt="meditation page before"  />
                            <img src='/images/tranquify/page_meditation.svg' alt="meditation page after" />
                          </div>
                          <p>
                            1. Labels were added to each section for improved clarity and navigation.
                          </p>
                        </div>
                        <div className={styles.testing}>
                          <div className={styles.testingImages}>
                            <img src='/images/tranquify/user_testing_meditationplay.svg' alt="meditation play page before" />
                            <img src='/images/tranquify/page_meditationplay.svg' alt="meditation play page after" />
                          </div>
                          <p>
                            2. We made the heart icons more prominent and accessible throughout the app.
                          </p>
                        </div>
                        <div className={styles.testing}>
                          <div className={styles.testingImages}>
                            <img src='/images/tranquify/user_testing_home.svg' alt="home page before" />
                            <img src='/images/tranquify/page_home.svg' alt="home page after" />
                          </div>
                          <p>
                            3. The weather section on the home page was resized to reduce confusion.
                          </p>
                        </div>
                      </div>
                      <h2>4. Frontend Developing</h2>
                      <p>
                        This project marked my first experience transitioning from design to frontend development, 
                        where I gained a fundamental understanding of React and Next.js. 
                        Additionally, I learned how to integrate APIs to enhance app functionality and user experience.
                      </p>
                      <div className={styles.btn}>
                        <Link href='https://tranquify.vercel.app/' target='_blank'>Visit our app</Link>
                      </div>
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
      </div>

    </div>
  )
}
