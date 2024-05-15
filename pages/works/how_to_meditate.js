import styles from '/styles/Works/How_to_meditate.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Work_Sans } from 'next/font/google'
import Image from 'next/image'
const workSans = Work_Sans ({subsets: ['latin']})
import Box from '@/components/Box'
import Head from 'next/head'

export default function Works() {
  return (
    <div>

      <Head>
        <title>How to Meditate</title>
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={`${styles.mainContainer} ${workSans.className}`}>
            <div>
                <Box content={
                    <div>
                        <h2>How to meditate</h2>
                        <div className={styles.heart}>
                          <Image src='/images/heart.svg' alt='heart' fill/>
                        </div>
                        <div>
                            <video controls>
                                <source src='/meditation.mp4' type='video/mp4'></source>
                            </video>
                        </div>
                        <h2>Overview</h2>
                        <p>Timeline: Feb 2024</p>
                        <p>Tools: Adobe After Effects, Adobe Illustrator</p>
                        <h2>Summary</h2>
                        <p>Using After Effects, I crafted a brief instructional video on meditation. 
                          Beginning with conceptualization, I outlined the scenes, graphics, and voiceover needed for the video. 
                          With a clear plan in place, I brought the project to life in After Effects, 
                          blending visual elements and narration to create an engaging and informative piece.</p>
                        <h2>What I learned</h2>
                        <p>Through this project, I gained valuable insights into the importance of animation speed. 
                          While captivating graphics are essential, I discovered that the true engagement lies in the timing and pace of the animation. </p>
                        <h2>What's next</h2>
                        <p>Upon researching other motion graphics projects for reference, 
                          I discovered numerous creative ways for transitions that can evoke "wow" moments for the audience. 
                          I'm excited to explore this area further and experiment with various techniques. Additionally, 
                          for my upcoming project, I plan to create a full graphic animation. 
                          To enhance the quality and efficiency of my animations, I aim to explore more tools such as expressions.</p>
                    </div>
                }/>
            </div>
        </main>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>

    </div>
  )
}
