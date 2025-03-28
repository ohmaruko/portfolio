import styles from './HowToMeditate.module.css'
import Image from 'next/image'
import Box from '@/components/Box'
import Head from 'next/head'

export default function Works() {
  return (
    <div>

      <Head>
        <title>How to Meditate | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
          <Box backButton={true} content={
            <div>
                  <h1>How to Meditate</h1>
                  <div className={styles.heart}>
                    <img src='/images/heart.svg' alt='heart'/>
                  </div>
                  <div>
                      <video controls>
                          <source src='/meditation.mp4' type='video/mp4'></source>
                      </video>
                  </div>
                  <h2>Overview</h2>
                  <p>Timeline: February 2024</p>
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
    </div>
  )
}
