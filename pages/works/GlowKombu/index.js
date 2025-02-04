import styles from './GlowKombu.module.css'
import Box from '@/components/Box'
import Head from 'next/head'

export default function GlowKombu() {
  return (
    <div>

      <Head>
        <title>Glow Kombu | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
        <Box backButton={true} content={
            <div>
                <h1>Glow Kombu</h1>
                <h1>Kombucha Can Design</h1>
                <p>November 2024</p>
                <div className={styles.mainImage} >
                    <img src='/images/glowkombu/banner.png' alt='GlowKombu Kombucha'/>
                    <img src='/images/glowkombu/glowkombu_straight.png' alt='GlowKombu Kombucha'/>
                </div>
                <div className={styles.aboutGoal} >
                  <div>
                    <h2>About</h2>
                    <p>GLOW KOMBU is a kombucha brand that embodies warmth, balance, and vitality. Inspired by the natural energy of the sun, its design radiates a sense of wellness and refreshment, inviting consumers to experience the glow of kombucha from the moment they pick up the can.</p>
                    </div>
                    <div> 
                    <h2>Goal</h2>
                    <p>The goal of GLOW KOMBU’s packaging design is to create a visual and emotional connection with health-conscious consumers. The luminous sun motif and monotone color palette establish a minimalistic yet organic aesthetic. Every design element is crafted to make consumers feel grounded, refreshed, and energized, aligning seamlessly with the essence of kombucha.</p>
                    </div>
                </div>
                <div className={styles.flavors}>
                    <img src='/images/glowkombu/mockup_ginger.png' alt='GlowKombu Kombucha'/>
                    <img src='/images/glowkombu/mockup_mango.png' alt='GlowKombu Kombucha'/>
                    <img src='/images/glowkombu/mockup_blueberry.png' alt='GlowKombu Kombucha'/>
                    <img src='/images/glowkombu/colors.png' alt='GlowKombu Kombucha'/>
                </div>
                {/* <div className={styles.frontSide}>
                    <img src='/images/glowkombu/mockup_face_ginger.png' alt='GlowKombu Kombucha'/>
                    <img src='/images/glowkombu/mockup_side_ginger.png' alt='GlowKombu Kombucha'/>
                    </div> */}
                <div className={styles.mainImage} >
                    <img src='/images/glowkombu/mockups_wide.png' alt='GlowKombu Kombucha'/>
                    <img src='/images/glowkombu/banner_2.png' alt='GlowKombu Kombucha'/>
                </div>
            </div>
        }/>
      </div>
    </div>
  )
}
