import styles from './Tranquify.module.css'
import Image from 'next/image'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Works() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
      setSelectedImage(imageSrc);
      setIsFullScreen(true);
    };

    const handleClose = () => {
      setIsFullScreen(false);
      setSelectedImage(null);
    };

  
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
                          <img className={styles.bannerLogo}src='/images/tranquify/horizontalLogo.svg' alt="Tranquify logo: a green cloudy shape with a relaxed smiling face, accompanied by a wordmark." />
                          <img className={styles.bannerImg} src='/images/tranquify/tranquify_banner.png' alt="Hand holding a smartphone displaying Tranquify's mood tracking screen, featuring colorful mood icons and a user-friendly interface" />
                      </div>
                      <h2>Overview</h2>
                      <p>A personalized approach to mental well-being through mood tracking and tailored meditation content.</p>
                      <p><strong>Role</strong>: UI/UX Designer, Frontend Developer</p>
                      <p><strong>Team</strong>: Two other teammates</p>
                      <p><strong>Timeline</strong>: January 2024 - April 2024</p>
                      <p><strong>Tools</strong>: Figma, NextJS, Adobe Illustrator, Adobe After Effects</p>
                      <div className={styles.btn}>
                        <Link href='https://tranquify.vercel.app/' target='_blank'>Visit mockup</Link>
                        <Link href='https://github.com/ohmaruko/Tranquify' target='_blank' className={styles.githubLogo}>
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                          </svg>
                        </Link>
                      </div>
                      <h2>Context</h2>
                      <div className={styles.context}>
                        {/* <img src='/images/tranquify/mascots.svg' alt="Tranquify Mascots" /> */}
                        <div className={styles.contextInner}>
                          <h3>Problem</h3>
                          <p>According to <a href='https://www150.statcan.gc.ca/n1/pub/11-627-m/11-627-m2023053-eng.htm' target='_blank'>Statistics Canada</a>, 
                            18% of Canadians <strong>experienced anxiety and mood disorders</strong> as of 2022, 
                            marking an increase since 2012. While mood-tracking apps help users recognize mood patterns and trends, 
                            which can motivate positive change, 
                            many fail to provide tools for <strong>interpreting the data or actionable recommendations</strong> to enhance mental well-being.</p>
                        </div>
                        <div className={styles.contextInner}>
                          <h3>Solution</h3>
                          <p>Tranquify is a mobile mood-tracking app designed to empower users to take charge of their mental health. 
                            It combines <strong>mood tracking</strong> with tailored <strong>meditation content</strong>, 
                            offering personalized suggestions and actionable insights based on logged moods. 
                            Users can access meditation resources customized to their emotional state, 
                            helping them take <strong>meaningful steps toward better mental well-being.</strong></p>
                        </div>
                      </div>

                      <h2>1. Persona</h2>
                      <p>Three personas were created to represent key user groups. Each persona helps to better understand the unique needs and preferences of our target audience.</p>
                      <div className={styles.personas}>
                        <img onClick={() => handleImageClick('/images/tranquify/persona1.png')} className={styles.thumbnail} src='/images/tranquify/persona1.png' alt="Persona: Beauty Explorer" />
                        <img onClick={() => handleImageClick('/images/tranquify/persona2.png')} className={styles.thumbnail} src='/images/tranquify/persona2.png' alt="Persona: Tech Savvy" />
                        <img onClick={() => handleImageClick('/images/tranquify/persona3.png')} className={styles.thumbnail} src='/images/tranquify/persona3.png' alt="Persona: Homemaker" />
                        {isFullScreen && (
                          <div className={styles.fullScreenOverlay} onClick={handleClose}>
                            <div className={styles.closeBtn}><p>&#10005;</p></div>
                            <img
                              src={selectedImage}
                              alt={`Full-screen image of ${selectedImage}`}
                              className={styles.fullScreenImage}
                              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
                            />
                          </div>
                        )}
                      </div>

                      <h2>2. Branding</h2>
                      <div className={styles.branding}>
                        <p>Tranquify's logo features a cloud shape with closed eyes and a serene smile, symbolizing calmness and mental well-being. It is framed within a rounded square to ensure versatility across different sizes.</p>
                        <img className={styles.brandingImage} src='/images/tranquify/logos.svg' alt="Tranquify's logo variations in colored, black & white, and gray scale." />
                        <p>Five mascots, each representing a different mood, use unique color palettes to maintain a consistent tone. Designed with imperfect shapes, they convey the message that it's okay not to be perfect, enhancing inclusivity.</p>
                        <img className={styles.brandingImage} src='/images/tranquify/mascots_styleguide.svg' alt="Five different mascots characters that represent different moods." />
                        <p>Components</p>
                        <img className={styles.brandingImage} src='/images/tranquify/buttons.svg' alt="Buttons designed with the branded color palette." />
                        <div className={styles.btn}>
                          <Link href='https://tranquify-style-guide.vercel.app/' target='_blank'>Visit style guide</Link>
                        </div>
                      </div>

                      <h2>3. UI/UX</h2>
                      <p>Emphasis is placed on creating a seamless, intuitive user flow that allows for natural and effortless navigation. 
                        The design choices are carefully aligned with the target audience's needs and preferences, 
                        while a cohesive style guide ensures consistency.</p>
                      <h3>Wireframe</h3>
                      <img className={styles.wireframe} src='/images/tranquify/wireframe.svg' alt="Wireframe" />
                      <h3>Initial Hi-Fi Design</h3>
                      <img className={styles.wireframe} src='/images/tranquify/initial_hifi.svg' alt="Initial Hi-Fi Design" />
                      <h3>User Testing</h3>
                      <p>
                        During user testing, participants completed six tasks using Tranquify's Figma mockups. 
                        Key issues were identified through their interactions, and based on their feedback, 
                        design adjustments were made and implemented in the frontend development.
                      </p>
                      <div className={styles.testingsContainer}>
                        <div className={styles.testing}>
                          <div className={styles.testingImages}>
                            <img src='/images/tranquify/user_testing_meditation.svg' alt="meditation page before" />
                            <p>&#8674;</p>
                            <img src='/images/tranquify/page_meditation.svg' alt="meditation page after" />
                          </div>
                          <p>
                            1. Labels were added to each section for improved <strong>clarity and navigation</strong>.
                          </p>
                        </div>
                        <div className={styles.testing}>
                          <div className={styles.testingImages}>
                            <img src='/images/tranquify/user_testing_meditationplay.svg' alt="meditation play page before" />
                            <p>&#8674;</p>
                            <img src='/images/tranquify/page_meditationplay.svg' alt="meditation play page after" />
                          </div>
                          <p>
                            2. We made the heart icons more <strong>prominent and accessible</strong> throughout the app.
                          </p>
                        </div>
                        <div className={styles.testing}>
                          <div className={styles.testingImages}>
                            <img src='/images/tranquify/user_testing_home.svg' alt="home page before" />
                            <p>&#8674;</p>
                            <img src='/images/tranquify/page_home.svg' alt="home page after" />
                          </div>
                          <p>
                            3. The weather section on the home page was resized to <strong>reduce confusion</strong>.
                          </p>
                        </div>
                      </div>
                      <h3>Final Design</h3>
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
                      <div className={styles.btn}>
                        <Link href="https://www.figma.com/proto/5tbiubXaIbwy4mL49rAXmZ/MDIA-2106-%E2%80%93-Tranquify-Latest(Madoka)?node-id=157-971&t=BMzEVAz554cAtwus-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=157%3A971"
                        target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Figma prototype</Link>
                      </div>

                      <h2>4. Frontend Developing</h2>
                      <p>
                        This project provided my first experience transitioning from design to frontend development, 
                        where I gained foundational knowledge of React and Next.js, 
                        along with learning API integration to enhance app functionality and user experience.
                      </p>
                      <div className={styles.btn}>
                        <Link href='https://tranquify.vercel.app/' target='_blank'>Coded mockup</Link>
                      </div>
                      <h2>What's next?</h2>
                      <p><strong>AI Integration</strong></p>
                      <p>
                        The suggestion messages after logging mood could be enhanced by implementing AI, allowing for more personalized responses rather than relying on preset patterns.
                      </p>
                      <p><strong>Personal Growth</strong></p>
                      <p>
                        This project marked my first experience transitioning from branding and UI/UX design to frontend development, where I gained a foundational understanding of React and Next.js.
                        I am eager to deepen my understanding of how frontend and backend systems integrate, with the goal of leveraging my frontend skills in real-world environments.
                        Additionally, I am keen to refine my brand design skills to create more engaging, impactful assets that remain consistent across all platforms.
                      </p>
                  </div>
              }/>
          </div>
      </div>

    </div>
  )
}
