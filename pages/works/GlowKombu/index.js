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
                    <img src='/images/glowkombu/glowkombu_straight.png' alt='GlowKombu Kombucha'/>
                    <p>GLOW KOMBU’s packaging design invites consumers to feel warmth, balance, and vitality glowing from the relaxed sun the moment they pick up the can. The sun's rays glow around the can, creating a luminous and inviting aesthetic that embodies the natural energy of kombucha.</p>
                    <p>The design uses a monotone color palette for a clean, minimalistic feel, with a distinct color assigned to each flavor. These colors are thoughtfully chosen to reflect the essence of the flavor while maintaining an organic and earthy tone. Every detail of the design is tailored to resonate with health-conscious consumers, making them feel grounded, refreshed, and connected to the natural vitality.</p>
                </div>
                <div className={styles.frontSide}>
                    <img src='/images/glowkombu/mockup_face_ginger.png' alt='GlowKombu Kombucha'/>
                    <img src='/images/glowkombu/mockup_side_ginger.png' alt='GlowKombu Kombucha'/>
                </div>
                <div className={styles.mainImage} >
                    <img src='/images/glowkombu/glowkombu_wide.png' alt='GlowKombu Kombucha'/>
                </div>
            </div>
        }/>
      </div>
    </div>
  )
}
