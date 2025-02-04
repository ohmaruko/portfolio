import styles from './Tranquify.module.css'
import Image from 'next/image'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import AnimatedButton from '@/components/AnimatedButton'

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
        <title>Tranquify | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
          <div className={styles.innerContainer}>
              <Box  backButton={true} content={
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
                        <AnimatedButton href='https://tranquify.vercel.app/' targetBlank={true}>Visit mockup</AnimatedButton>
                        <AnimatedButton href='https://github.com/ohmaruko/Tranquify' targetBlank={true}><FaGithub /></AnimatedButton>
                      </div>

                      <div className={styles.section}>
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
                      </div>

                      <div className={styles.section}>
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
                      </div>

                      <div className={styles.section}>
                        <h2>2. Branding</h2>
                        <div className={styles.branding}>
                          <h3>Logo</h3>
                          <p>Tranquify's logo features a cloud-like shape, embodying the essence of our app <strong>aimed at supporting users' mental well-being</strong>. 
                            With closed eyes and a gentle smile, the logo <strong>evokes feelings of calmness and relaxation</strong>. 
                            To ensure versatility across different sizes, the cloud-shaped character is depicted showing only its face within a rounded square frame.</p>
                          <img className={styles.brandingImage} src='/images/tranquify/logos.svg' alt="Tranquify's logo variations in colored, black & white, and gray scale." />
                          <h3>Color</h3>
                          <p>Tranquify's color palette is designed to <strong>promote calmness, stability</strong>, and trust while ensuring a visually appealing and <strong>comfortable user experience</strong>. 
                          Light green (#9DB580) serves as the primary color, offering a soothing effect that aligns with our app’s theme of tranquility.
                          Complementary greens, light gray, and warm beige <strong>add depth and balance</strong>, creating an inviting and harmonious interface.
                          </p>
                          <img className={styles.brandingImage} src='/images/tranquify/colorPalette.svg' alt="Tranquify color palette featuring soothing light green (#9DB580) as the primary color, complemented by various shades of green, light gray, and warm beige for a balanced and calming design." />
                          <h3>Typography</h3>
                          <p>Quicksand is chosen for the logo font due to its friendly, rounded style, which complements the smooth, approachable shapes of our logo and mascots. It conveys <strong>calmness, inclusiveness, and approachability</strong>, aligning with our app’s theme. 
                          </p>
                          <p>DM Sans is selected as the body font for its <strong>excellent readability</strong>, ensuring a stress-free reading experience across various devices, which is essential for users interacting with mood tracking and meditation content.
                          </p>
                          <img className={styles.brandingImage} src='/images/tranquify/typography.svg' alt="Typography used in Tranquify: Quicksand for the logo, offering a friendly and rounded style, and DM Sans for the body text, ensuring clear readability and a comfortable user experience." />
                          <h3>Mascots</h3>
                          <p>Our five mascots <strong>represent different moods</strong>, 
                          each depicted in a unique colour palette to maintain consistent tones aligned with our app's design. 
                          To enhance inclusivity and approachability, the mascots are <strong>intentionally designed with imperfect shapes</strong>, 
                          conveying the message that <strong>it's okay not to be perfect</strong>.</p>
                          <img className={styles.brandingImage} src='/images/tranquify/mascots_styleguide.svg' alt="Five different mascots characters that represent different moods." />
                          <h3>Components</h3>
                          <p>The interface elements are designed with accessibility and usability in mind. Buttons feature a rounded shape for a soft, 
                            approachable look. We carefully select colors to ensure <strong>sufficient contrast</strong>, meeting accessibility standards for readability and visibility.</p>
                          <img className={styles.brandingImage} src='/images/tranquify/buttons.svg' alt="Buttons designed with the branded color palette." />
                          <div className={styles.btn}>
                            <AnimatedButton href='https://tranquify-style-guide.vercel.app/' targetBlank={true}>Visit style guide</AnimatedButton>
                          </div>
                        </div>
                      </div>

                      <h2>3. UI/UX</h2>
                      <p>Emphasis is placed on creating a seamless, intuitive user flow that allows for natural and effortless navigation. 
                        The design choices are carefully aligned with the target audience's needs and preferences, 
                        while a cohesive style guide ensures consistency.</p>
                      <div className={styles.section}>
                        <h3>Wireframe</h3>
                        <p>The wireframe was created to align team expectations and refine the user experience before transitioning to high-fidelity design.</p>
                        <img className={styles.wireframe} src='/images/tranquify/wireframe.svg' alt="Wireframe" />
                        <p><strong>Onboarding</strong>: Provides a quick introduction to help new users get started.</p>
                        <p><strong>Home</strong>: Offers easy access to key features through quick links.</p>
                        <p><strong>Mood Tracker</strong>: Allows users to log their mood by answering questions and receive personalized messages from Tranquify.</p>
                        <p><strong>Calendar</strong>: Displays mood trends over time with a calendar view and past logs</p>
                      </div>

                      <div className={styles.section}>
                        <h3>Initial Hi-Fi Design</h3>
                        <img className={styles.wireframe} src='/images/tranquify/initial_hifi.svg' alt="Initial Hi-Fi Design" />
                        <p>The high-fidelity design incorporates our color palette and typography while ensuring contrast and readability.
                          The home page is <strong>customized for each user</strong>, featuring past week mood logs, recommended and favorite meditation content, 
                          and a weather display, acknowledging its impact on mood. 
                          The meditation page includes <strong>category cards for easy navigation</strong>, allowing users to quickly find the content they’re looking for.</p>
                      </div>
                      <div className={styles.section}>
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
                      </div>

                      <div className={styles.section}>
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
                          <AnimatedButton href='https://www.figma.com/proto/5tbiubXaIbwy4mL49rAXmZ/MDIA-2106-%E2%80%93-Tranquify-Latest(Madoka)?node-id=157-971&t=BMzEVAz554cAtwus-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=157%3A971' targetBlank={true}>Figma prototype</AnimatedButton>
                        </div>
                      </div>

                      <div className={styles.section}>
                        <h2>4. Frontend Developing</h2>
                        <p>
                          This project provided my first experience transitioning from design to frontend development, 
                          where I gained foundational knowledge of React and Next.js, 
                          along with learning API integration to enhance app functionality and user experience.
                        </p>
                        <div className={styles.btn}>
                          <AnimatedButton href='https://tranquify.vercel.app/' targetBlank={true}>Coded mockup</AnimatedButton>
                        </div>
                      </div>

                      <div className={styles.section}>
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
                  </div>
              }/>
          </div>
      </div>

    </div>
  )
}
