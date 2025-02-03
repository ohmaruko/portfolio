import styles from '../styles/Home.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Madoka Nogaki</title>
      </Head>
      <div className={styles.homeContainer}>
          <div className={styles.box1}>
            <Box title="About me" content={
              <div className={styles.color}>
                <p>I'm a graphic/web designer, originally from Japan and now based in Vancouver/Victoria.</p>
                <p>I love infusing <span>color</span> and character into my designs, creating playful and organic visuals that <span>brighten everyday life :D </span>
                Aiming to create simple yet memorable designs that effectively deliver messages while bringing a touch of joy to the audience.</p>
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
                      <FaLinkedin className={styles.logo} size={20}/>
                      <p>LinkedIn</p>
                    </a>
                  </div>
                  <div>
                    <a href='https://github.com/ohmaruko' className={styles.link}>
                      <FaGithub className={styles.logo} size={20}/>
                      <p>GitHub</p>
                    </a>
                  </div>
                </>
              }
            />
          </div>
          <div className={styles.box2}>
            <Box title="Tools" content={
              <div className={styles.skill}>
                <div>
                  <p>Adobe Creative Suite</p>
                  <p>Figma</p>
                  <p>HTML, CSS, Javascript</p>
                  <p>React</p>
                </div>
              </div>
            }/>
          </div>

            
          <div className={styles.box1}>
              <Box title="Skills" content={
              <div className={styles.skill}>
                <div>
                  <p>Graphic design</p>
                  <p>Logo design</p>
                  <p>Packaging design</p>
                  <p>Typography layout</p>
                </div>
                <div>
                  <p>Motion graphic design</p>
                  <p>Responsive web design</p>
                  <p>Front-end programming</p>
                </div>
              </div>
              }/>
          </div>

          <div className={styles.box1}>
              <Box title="Education" content={
                <div className={styles.education}>
                  <p>British Columbia Institute of Techonology</p>
                  <p>Digital Design and Development Diploma</p>
                  <img src='images/bcit_logo.png' alt='BCIT logo' />
                  <p>(Sep 2023 – May 2025)</p>
                </div>
              }/>
          </div>
          <div className={styles.box2}>
            <Box title="Favourites ⟡*" content={
              <div className={styles.funfacts}>
                <p>Ocean</p>
                <p>Yoga</p>
                <p>Gummy Bear</p>
                <div className={styles.candies}>
                    <div className={styles.candy1}>🐻‍❄️</div>
                    <div className={styles.candy2}>🧘</div>
                    <div className={styles.candy3}>🌊</div>
                </div>
              </div>
            }/>
          </div>
      </div>

    </div>
  )
}