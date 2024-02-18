
import styles from '../styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Box from '@/components/Box'
import { Open_Sans } from 'next/font/google'
import { Bitter } from 'next/font/google'

const openSans = Open_Sans ({subsets: ['latin']})
const bitter = Bitter ({subsets: ['latin']})

export default function Home() {
  return (
    <>

      <head>
        <title>Madoka Nogaki Portfolio</title>
        <meta name="description" content="Portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className={styles.container}>
        <Header className={styles.header}/>
        
        <main  className={`${styles.outerContainer}, ${openSans.className}`}>
          <div className={styles.outerContainer}>
              <div className={styles.box1}>
                <Box title="About me" content={
                  <div>
                    <p> 
                    I am a frontend developer and UI/UX designer, raised in Japan, based in Vanvouver. 
                    I mainly work with Next.js, javascript, HTML, CSS. </p>
                    <h5>Education</h5>
                    <p>British Columbia Institute of Techonology (Sep 2023 – May 2025)</p>
                    <p>Digital Design and Development Diploma</p>
                  </div>
                }/>
              </div>
              <div className={styles.box2}>
                <Box 
                  title="Contact"
                  content={
                    <>
                      <div>
                        <a href='https://www.linkedin.com/in/madoka-nogaki-a0b130296/' className={styles.link}>
                          <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                          </svg>
                          <p>LinkedIn</p>
                        </a>
                      </div>
                      <div>
                        <a href='https://github.com/ohmaruko' className={styles.link}>
                          <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                          </svg>
                          <p>GitHub</p>
                        </a>
                      </div>
                      <div>
                        <div href='' className={styles.link}>
                          <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96" id="email" width="20" height="20"><g data-name="Layer 2">
                            <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z">
                            </path></g>
                          </svg>
                          <p>maruko66513@gmail.com</p>
                        </div>
                      </div>
                    </>
                  }
                />
              </div>
          </div>
          <div className={styles.outerContainer}>
            <div className={styles.box2}>
                  <Box title="Tools" content={
                    <div className={styles.skill}>
                      <div>
                        <p>Figma</p>
                        <p>Illustrator</p>
                        <p>Photoshop</p>
                        <p>After Effects</p>
                        </div>
                      <div>
                        <p>HTML, CSS</p>
                        <p>Javascript</p>
                        <p>Next.js</p>
                        <p>Bootstrap</p>
                        <p>Git</p>
                      </div>
                    </div>
                  }/>
                </div>
              <div className={styles.box1}>
                 <Box title="Skill" content={
                  <div className={styles.skill}>
                    <div>
                      <p>User centered design</p>
                      <p>Wireframing</p>
                      <p>Prototyping</p>
                      <p>User research</p>
                    </div>
                    <div>
                      <p>User testing</p>
                      <p>Responsive web design</p>
                      <p>Front-end programming</p>
                    </div>
                  </div>
                 }/>
              </div>
              
          </div>
        </main>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>

    </>
  )
}
