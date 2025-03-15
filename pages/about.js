'use client'
import styles from '../styles/About.module.css'
import AboutCard from '@/components/AboutCard'
import Head from 'next/head'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from 'react';

export default function About() {

  // Draggable card functions
  const cardsRef = useRef([]);
  const addToRefs = (card) => {
    if (card && !cardsRef.current.includes(card)) {
      cardsRef.current.push(card);
    }
  };
  useEffect(() => {
    const draggableGsap = async () => {
      // import gsap here to prevent from server-side rendering error ;[
      const gsap = (await import('gsap')).default;
      const { Draggable } = await import('gsap/Draggable');
      gsap.registerPlugin(Draggable);
      
      cardsRef.current.forEach(card => {
        if (card) {
          Draggable.create(card, {
            type: "x,y",
            bounds: document.querySelector(`.${styles.aboutContainer}`),
            inertia: true,
            edgeResistance: 0.5,
          });
        }
      });
    };
    draggableGsap();
  }, []);
  
  return (
    <div>
      <Head>
        <title>About Madoka Nogaki: A graphic & web designer based in Vancouver/Victoria</title>
      </Head>
      <div className={styles.aboutContainer}>

        <div className={styles.aboutAndContact}>
          <div>
            <div className={styles.about} ref={addToRefs}>
              <AboutCard title="About" content={
                <div className={styles.color}>
                  <p>
                    I'm a graphic/web designer focusing on branding, originally from Japan and now based in Vancouver/Victoria. 
                  </p>
                  <p>
                    I love infusing <span>color</span> and character into my designs, creating playful and organic visuals that <span>brighten everyday life :D </span>
                    Aiming to create simple yet memorable designs that effectively deliver brand’s messages while bringing a touch of joy to the audience.</p>
                </div>
              }/>
            </div>
            <div className={styles.greeting}>
              <h2>It's nice to meet you ;)</h2>
            </div>
          </div>
          <div className={styles.contactOuterContainer} ref={addToRefs}>
            <AboutCard 
              content={
                <div className={styles.contactInnerContainer}>
                  <div className={styles.profileImg} >
                    <img src='/images/about/madoka_profile.jpg' alt='Madoka Nogaki' />
                  </div>
                  <div className={styles.contact}>
                    <a href='https://www.linkedin.com/in/madoka-nogaki-a0b130296/' className={styles.link}>
                      <FaLinkedin className={styles.logo} size={20}/>
                      <p>LinkedIn</p>
                    </a>
                    <a href='https://github.com/ohmaruko' className={styles.link}>
                      <FaGithub className={styles.logo} size={20}/>
                      <p>GitHub</p>
                    </a>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.serviceCard} ref={addToRefs}>
            <AboutCard title="Branding" content={
              <p>Transform brand messages into visuals through logo design, packaging, and design asset creation.</p>
            }/>
          </div>

            
          <div className={styles.serviceCard} ref={addToRefs}>
              <AboutCard title="Graphic Design" content={
                <p>Communicate messages visually, through advertisements, typography layouts, motion graphics.</p>
              }/>
          </div>

          <div className={styles.serviceCard} ref={addToRefs}>
              <AboutCard title="UX/UI Design" content={
                <p>Design solutions to achieve business goals with intuitive and responsive web design.</p>
              }/>
          </div>
        </div>

          <div className={styles.experienceOuterContainer} ref={addToRefs}>
              <AboutCard content={
                <div className={styles.exprienceInnerContainer}>
                  <div className={styles.exprience}>
                    <p>2025.4 -</p>
                    <p>
                      Website Experience and Design Intern
                      <br/>Unicorn Marketing Co.
                    </p>
                  </div>
                  <div className={styles.exprience}>
                    <p>2023 - 2025</p>
                    <p>
                      British Columbia Institute of Technology 
                      <br/>Digital Design and Development Diploma
                    </p>
                  </div>
                </div>
              }/>
              <img src='images/bcit_logo.png' alt='BCIT logo' />
          </div>

          <div className={styles.favouritesOuterContainer}>
            <div className={styles.favouritesMiddleContainer}>
              <div className={styles.favourite} ref={addToRefs}>
                <AboutCard 
                  content={
                    <div className={styles.favouriteInnerContainer}>
                        <img src='/images/about/nature.jpg' alt='Nature' />
                      <p>Nature</p>
                    </div>
                  }
                />
              </div>
              <div className={styles.favourite} ref={addToRefs}>
                <AboutCard 
                  content={
                    <div className={styles.favouriteInnerContainer}>
                        <img src='/images/about/cat.jpg' alt='Cat' />
                      <p>My cat ;3</p>
                    </div>
                  }
                />
              </div>
              <div className={styles.favourite} ref={addToRefs}>
                <AboutCard 
                  content={
                    <div className={styles.favouriteInnerContainer}>
                        <img src='/images/about/color.jpg' alt='Color puzzle' />
                      <p>Color</p>
                    </div>
                  }
                />
              </div>
            </div>
            <div className={styles.favouritesMiddleContainer}>
              <div className={styles.favourite} ref={addToRefs}>
                <AboutCard 
                  content={
                    <div className={styles.favouriteInnerContainer}>
                        <img src='/images/about/yoga.jpg' alt='Yoga and Meditation' />
                      <p>Yoga and Mediation</p>
                    </div>
                  }
                />
              </div>
              <div className={styles.favourite} ref={addToRefs}>
                <AboutCard 
                  content={
                    <div className={styles.favouriteInnerContainer}>
                        <img src='/images/about/crochet.jpg' alt='Crochet' />
                      <p>My new hobby</p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}