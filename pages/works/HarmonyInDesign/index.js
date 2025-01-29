import styles from './HarmonyInDesign.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedButton from '@/components/AnimatedButton'

export default function HarmonyInDesign() {
  return (
    <div>

      <Head>
        <title>Harmony In Design</title>
      </Head>

      <div className={styles.container}>
          <div className={styles.innerContainer}>
            <Box  backButton={true} content={
                <div>
                    <h1>Harmony In Design</h1>
                    <h1>Magazine Design</h1>
                    <p>October 2024</p>
                    <div className={styles.magazine}>
                        <img src='/images/print_magazine.png' alt='Print Magazine' />
                        <img src='/images/digital_magazine.png' alt='Digital Magazine' />
                    </div>
                    <div className={styles.btn}>
                      <AnimatedButton href='https://indd.adobe.com/view/a151626f-84f9-4d74-82c0-0df11a2ecfcc' targetBlank={true}>View Digital Magazine 👀</AnimatedButton>
                    </div>
                    <p><strong>Tools</strong>: Adobe InDesign</p>
                </div>
            }/>
          </div>
      </div>

    </div>
  )
}
