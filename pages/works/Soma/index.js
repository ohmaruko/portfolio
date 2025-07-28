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
                <p>June 2025</p>
                <div className={styles.mockupImageContainer} >
                    <ImageViewer imageSrc="/images/soma/mockup_all.png" altText="Soma Coffee Midnight Drift" />
                </div>
                <div className={styles.textContainer}>
                    <p>
                        A packaging design for SOMA Coffee Roaster that blends minimalism with artisanal warmth, honoring the journey from soil to sip through thoughtful storytelling and ethical transparency. The design combines modern aesthetics with handcrafted touches—featuring hand-drawn graphics and a hint of quirky fun—to create a unique, approachable feel. Each bag becomes a curated experience, crafted for a lifestyle-conscious, creative audience that values sustainability, quality, and the ritual of coffee.
                    </p>
                </div>
                <div className={styles.dielineContainer} >
                    <ImageViewer imageSrc="/images/soma/dieline_velvet.png" altText="Dieline" />
                </div>
                <div className={styles.mockupImagesContainer} >
                    <ImageViewer imageSrc="/images/soma/midnight.png" altText="Soma Coffee Midnight Drift" />
                    <ImageViewer imageSrc="/images/soma/golden.png" altText="Soma Coffee Golden Sunrise" />
                    <ImageViewer imageSrc="/images/soma/velvet.png" altText="Soma Coffee Velvet Bloom" />
                </div>
                <div>
                    <h2>Behind the Design</h2>
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
                            <p>Logo Design</p>
                            <ImageViewer imageSrc="/images/soma/logoideas.png" altText="Logo Ideas" />
                        </div>
                        <div>
                            <p>Illustration</p>
                            <ImageViewer imageSrc="/images/soma/illustration.png" altText="Illustration Ideas" />
                        </div>
                    </div>
                </div>
            </div>
        }/>
      </div>
    </div>
  )
}
