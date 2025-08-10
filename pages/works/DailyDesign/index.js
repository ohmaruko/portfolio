import styles from './DailyDesign.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import ImageViewer from '@/components/ImageViewer'

export default function GlowKombu() {
  return (
    <div>

      <Head>
        <title>Daily Design | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
        <Box backButton={true} content={
            <div>
                <h1>Daily Design</h1>
                <p>July 2025 - Present</p>
                <div className={styles.header} >
                    <ImageViewer imageSrc="/images/dailydesign/oli_oli.png" altText="Olive oil Oli Oli packaging" />
                    <p>
                        Designing one brand a day. Practicing design skills and creativity, exploring different styles and trends, and believing these dots will connect into something greater in the future :-)
                    </p>
                </div>
                <div className={styles.mockupImageContainer} >
                    <ImageViewer imageSrc="/images/dailydesign/bite_club.png" altText="Snack bar Bite Club packaging" />
                    <ImageViewer imageSrc="/images/dailydesign/just_milk.png" altText="Just Milk packaging" />
                    <ImageViewer imageSrc="/images/dailydesign/17°_cream.png" altText="Ice cream 17° Cream packaging" />
                </div>
                
            </div>
        }/>
      </div>
    </div>
  )
}
