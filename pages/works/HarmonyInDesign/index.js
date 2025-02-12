import styles from './HarmonyInDesign.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedButton from '@/components/AnimatedButton'

export default function HarmonyInDesign() {
  return (
    <div>

      <Head>
        <title>Harmony In Design | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
          <div className={styles.innerContainer}>
            <Box  backButton={true} content={
                <div>
                    <h1>Harmony In Design</h1>
                    <h1>Magazine Design</h1>
                    <p>October 2024</p>
                    <p>Tools: Adobe InDesign</p>
                    <div className={styles.magazine}>
                        <h2>Print Magazine</h2>
                        <img src='/images/harmonyInDesign/print_magazine.png' alt='Print Magazine' />
                        <div className={styles.printPages}>
                            <img src='/images/harmonyInDesign/print2-3.png' alt='Print Magazine Page 1' />
                            <img src='/images/harmonyInDesign/print4-5.png' alt='Print Magazine Page 1' />
                            <img src='/images/harmonyInDesign/print6-7.png' alt='Print Magazine Page 1' />
                            <img src='/images/harmonyInDesign/print8-9.png' alt='Print Magazine Page 1' />
                            <img src='/images/harmonyInDesign/print10-11.png' alt='Print Magazine Page 1' />
                            <img src='/images/harmonyInDesign/print_covers.png' alt='Print Magazine Page 1' />
                        </div>
                    </div>
                    <div className={styles.magazine}>
                        <h2>Interactive Digital Magazine</h2>
                        <img src='/images/harmonyInDesign/digital_magazine.png' alt='Digital Magazine' />
                        <iframe className={styles.digitalPages} 
                            src="https://indd.adobe.com/embed/a151626f-84f9-4d74-82c0-0df11a2ecfcc?startpage=1&allowFullscreen=false" 
                            frameborder="0" allowfullscreen="false">
                        </iframe>
                        <div className={styles.btn}>
                          <AnimatedButton href='https://indd.adobe.com/view/a151626f-84f9-4d74-82c0-0df11a2ecfcc' targetBlank={true}>View in Full Screen 👀</AnimatedButton>
                        </div>
                    </div>
                </div>
            }/>
          </div>
      </div>

    </div>
  )
}
