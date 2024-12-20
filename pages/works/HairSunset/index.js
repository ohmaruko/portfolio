import styles from './HairSunset.module.css'
import Image from 'next/image'
import Box from '@/components/Box'
import Head from 'next/head'

export default function Works() {
  return (
    <div>

      <Head>
        <title>Hair Sunset</title>
      </Head>

      <div className={styles.container}>
          <div className={styles.innerContainer}>
              <Box content={
                  <div>
                      <div className={styles.logo}>
                        <img src='/images/hairlogo/logo_wordmark.svg' alt='Hair Sunset Ad1' />
                      </div>
                      <h2>Overview</h2>
                      <p>Logo and Ads Design</p>
                      <p>Timeline: Dec 2023 - Jan 2024</p>
                      <p>Tools: Adobe Illustrator</p>
                      <h2>Summary</h2>
                      <p>Built logo for a hair salon and designed advertisements for a campaign.</p>
                      <div className={styles.businessCard}>
                        <img src='/images/hair/hair_sunset_business_card.png' alt='Hair Sunset Business Card' />
                        <img src='/images/hair/posters.png' alt='Hair Sunset Business Card' />
                      </div>
                      <div className={styles.logoContainer}>
                        <h3>Logo Idea Scketches</h3>
                        <p>When crafting the logo for a family-centric hair salon, 
                          I decided to include a pair of scissors to signify the salon's services, 
                          and added a friendly face or eyes to make it inviting and approachable.</p>
                        <div className={styles.logoInner}>
                            <Image src='/images/hair/sunsetIdea01.jpg' alt='Logo Scketch' width={100} height={100}/>
                            <Image src='/images/hair/sunsetIdea02.jpg' alt='Logo Scketch' width={100} height={100}/>
                            <Image src='/images/hair/sunsetIdea03.jpg' alt='Logo Scketch' width={100} height={100}/>
                            <Image src='/images/hair/sunsetIdea04.jpg' alt='Logo Scketch' width={100} height={100}/>
                            <Image src='/images/hair/sunsetIdea05.jpg' alt='Logo Scketch' width={100} height={100}/>
                        </div>
                        <h3>Logo Variations</h3>
                        <p>After receiving feedback on my logo concepts, 
                          I developed three variations for each chosen idea: 
                          a black and white version, a colored version, and a more intricate design 
                          to cater to different preferences and applications.</p>
                        <div className={styles.logoInner}>
                            <Image src='/images/hairlogo/BW1.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                            <Image src='/images/hairlogo/coloured1.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                            <Image src='/images/hairlogo/complex1.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                        </div>
                        <div className={styles.logoInner}>
                            <Image src='/images/hairlogo/BW2.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                            <Image src='/images/hairlogo/coloured2.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                            <Image src='/images/hairlogo/complex2.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                        </div>
                        <div className={styles.logoInner}>
                            <Image src='/images/hairlogo/BW3.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                            <Image src='/images/hairlogo/coloured3.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                            <Image src='/images/hairlogo/complex3.svg' alt='Hair Sunset Ad1' width={100} height={100}/>
                        </div>
                      </div>
                      <div className={styles.scketchContainer}>
                        <h3>Campaign Advertisement</h3>
                        <p>Inspired by the hair salon's name, I chosen an ellipse shape like the sunin for the primary ad design, 
                          ensuring that the chosen colors harmonize with the logo and evoke the salon's atmosphere.</p>
                        <div className={styles.logoInner}>
                            <Image src='/images/hair/sunsetIdea07.jpg' alt='Ads Scketch' width={300} height={200}/>
                            <Image src='/images/hair/hair2.png' alt='Hair Sunset Ad1' width={150} height={200}/>
                        </div>
                        <h3>Campaign Advertisement Series</h3>
                        <p>To maintain a consistent style across the ads, 
                          I incorporated different shapes such as stars and hexagons into two additional advertisements, 
                          while keeping other elements consistent with the primary ad. 
                          In selecting photographs, I ensured diversity by featuring individuals from various backgrounds and ages, 
                          fostering inclusivity.</p>
                          <div className={styles.ads}>
                            <img src='/images/hair/hair1.png' alt='Hair Sunset Ad1' />
                            <img src='/images/hair/hair2.png' alt='Hair Sunset Ad2' />
                            <img src='/images/hair/hair3.png' alt='Hair Sunset Ad3' />
                          </div>
                      </div>
                      <h2>What I learn</h2>
                      <p>This project provided me with valuable insights into the logo creation process, 
                        from idea generation to the development of various design iterations. 
                        Additionally, crafting the campaign advertisements gave me an understanding of how to produce a cohesive series of posters 
                        while adding dynamism to effectively communicate with the audience.
                      </p>
                  </div>
              }/>
          </div>
      </div>

    </div>
  )
}
