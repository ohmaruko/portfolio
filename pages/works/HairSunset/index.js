import styles from './HairSunset.module.css'
import Image from 'next/image'
import Box from '@/components/Box'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Works() {
  const [adNum, setAdNum] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setAdNum((prevAdNum) => (prevAdNum === 3 ? 1 : prevAdNum + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [])
  return (
    <div>

      <Head>
        <title>Hair Sunset | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
          <div className={styles.innerContainer}>
              <Box  backButton={true} content={
                  <div>
                      <div className={styles.banner}>
                        <img src='/images/hair/banner.png' alt='Hair Sunset Banner' />
                      </div>
                      <div className={styles.section}>
                        <h2>Overview</h2>
                        <p>Branding including designing logo and a cohesive ad series</p>
                        <p>Timeline: Dec 2023 - Jan 2024</p>
                        <p>Tools: Adobe Illustrator, Adobe Photoshop</p>
                      </div>

                      <div className={styles.section}>
                        <h2>About</h2>
                        <p>Hair Sunset is a welcoming, family-friendly hair salon designed to make every visit a relaxing and confortable experience. With a warm and inviting atmosphere, it's a place where parents can feel at ease bringing their children, ensuring a stress-free salon visit for the whole family.</p>
                      </div>

                      <div className={styles.section}>
                        <h2>Goal</h2>
                        <p>
                          The goal of Hair Sunset’s branding is to create a <strong>warm, approachable atmosphere</strong> that makes all visitors feel welcome. 
                          We aim to strike a balance, ensuring the space feels <strong>inviting and family-friendly without being overly playful</strong>, 
                          so both children and adults alike can enjoy a comfortable, relaxing experience. 
                        </p>
                      </div>

                      <div className={styles.section}>
                        <h2>Logo</h2>
                        <div className={styles.smallSection}>
                          <h3>Idea Sketches</h3>
                          <p>The logo for a family-centric hair salon incorporates a pair of scissors to represent its services, 
                            combined with a friendly face or eyes to create an inviting and approachable feel.</p>
                          <div className={styles.logoSketches}>
                              <img src='/images/hairlogo/logoSketches.png' alt='Logo Sketches'/>
                          </div>
                        </div>
                        <div className={styles.smallSection}>
                          <h3>Variations</h3>
                          <p>After gathering feedback on the logo concepts, three variations were created for each chosen idea: 
                            a black-and-white version, a colored version, and a more intricate design 
                            to accommodate different preferences and applications.</p>
                          <div className={styles.logoInner}>
                              <img src='/images/hairlogo/logosThreeIdeas.svg' alt='Hair Sunset three logo ideas.'/>
                          </div>
                        </div>
                        <div className={styles.smallSection}>
                          <h3>Final Logo</h3>
                          <img className={styles.finalLogo} src='/images/hairlogo/logo_wordmark.svg' alt='Hair Sunset Ad1' />
                          <div className={styles.businessCard}>
                            <img src='/images/hair/hair_sunset_business_card.png' alt='Hair Sunset Business Card' />
                          </div>
                        </div>
                      </div>
                      
                      <div className={styles.section}>
                        <h2>Ads</h2>
                        <h3>Ideation</h3>
                        <p>Drawing inspiration from the hair salon's name, an ellipse shape resembling the sun was selected for the primary ad design. 
                          The chosen colors were carefully coordinated with the logo to reflect the salon's atmosphere.
                        </p>
                        <div className={styles.adIdeas}>
                            <Image src='/images/hair/sunsetIdea07.jpg' alt='Ads Sketch' width={300} height={200}/>
                            <FaArrowRightLong size={20}/>
                            <Image src='/images/hair/hair2.png' alt='Hair Sunset Ad1' width={150} height={200}/>
                        </div>
                        {/* <img src='/images/hair/pattern.svg' alt='Hair Sunset Ad1'/> */}
                        <h3>Campaign Advertisement Series</h3>
                        <p>To maintain a cohesive style across the ads, various shapes such as stars and hexagons were integrated into two additional advertisements 
                          while preserving key elements from the primary ad. 
                          A diverse selection of photographs featuring individuals of different backgrounds and ages was included to promote inclusivity.</p>
                          <div className={styles.ads}>
                            <img src={`/images/hair/hair${adNum}.png`} alt='Hair Sunset Ad' key={adNum}/>
                          </div>
                      </div>
                      <div className={styles.section}>
                        <h2>What I learn</h2>
                        <p>This project provided valuable insights into the logo creation process, 
                          from idea generation to developing various design iterations while considering brand values. 
                          Additionally, crafting the campaign advertisements helped me understand how to create a cohesive series of posters with dynamism to effectively communicate with the audience.
                        </p>
                          <img className={styles.adsMockup} src='/images/hair/posters.png' alt='Hair Sunset Business Card' />
                      </div>
                  </div>
              }/>
          </div>
      </div>

    </div>
  )
}
