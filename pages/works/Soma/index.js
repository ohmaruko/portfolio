import styles from './Soma.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import ImageViewer from '@/components/ImageViewer'

export default function GlowKombu() {
  return (
    <div>

      <Head>
        <title>SOMA Coffee | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
        <Box backButton={true} content={
            <div>
                <h1>SOMA</h1>
                <h1>Coffee Packaging Design</h1>
                <p>June 2025 - Current</p>
                <div className={styles.mockupImageContainer} >
                    <ImageViewer imageSrc="/images/soma/mockup_all.png" altText="Soma Coffee Midnight Drift" />
                </div>
                {/* <div>
                    <h2>About</h2>
                </div>
                <div> 
                    <h2>Goal</h2>
                </div> */}
                <div className={styles.dielineContainer} >
                    <ImageViewer imageSrc="/images/soma/dieline_velvet.png" altText="Dieline" />
                </div>
                <div className={styles.mockupImageContainer} >
                    <ImageViewer imageSrc="/images/soma/midnight.png" altText="Soma Coffee Midnight Drift" />
                    <ImageViewer imageSrc="/images/soma/golden.png" altText="Soma Coffee Golden Sunrise" />
                    <ImageViewer imageSrc="/images/soma/velvet.png" altText="Soma Coffee Velvet Bloom" />
                </div>
                <div className={styles.textContainer} >
                    <div className={styles.processImageContainer} >
                        <div>
                            <p>Market Research</p>
                            <ImageViewer imageSrc="/images/soma/competitors.png" altText="Competitors Research" />
                        </div>
                        <div>
                            <p>Moodboard</p>
                            <ImageViewer imageSrc="/images/soma/moodboard.png" altText="Moodboard" />
                        </div>
                        <div>
                            <p>Illustration</p>
                            <ImageViewer imageSrc="/images/soma/illustration.png" altText="Illustration Ideas" />
                        </div>
                        <div>
                            <p>Logo Ideas</p>
                            <ImageViewer imageSrc="/images/soma/logoideas.png" altText="Logo Ideas" />
                        </div>
                    </div>
                </div>
                {/* <div className={styles.dielineContainer} >
                    <ImageViewer imageSrc="/images/soma/mockup_cup.jpg" altText="Mockup Cup" />
                </div>
                <div className={styles.textContainer}>
                  <h2>What I learned</h2>
                    <ul>
                      <li></li>
                    </ul>
                </div> */}
            </div>
        }/>
      </div>
    </div>
  )
}
