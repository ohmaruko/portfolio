import styles from './Konmari.module.css'
import Box from '@/components/Box'
import Head from 'next/head'

export default function Works() {
  return (
    <div>

      <Head>
        <title>How to Meditate</title>
      </Head>

      <div className={styles.container}>
          <Box content={
              <div>
                  <h1>Konmari Method</h1>
                  <h1>Motion Graphic Video</h1>
                  <p> </p>
                  <p>April - May 2024</p>
                  <p> </p>
                  <div>
                      <video controls>
                          <source src='/konmari.mp4' type='video/mp4'></source>
                      </video>
                  </div>
                  <h2>Summary</h2>
                  <p>This project involves creating a motion graphic video to share tips on organization and minimalism 
                    inspired by the Konmari Method. The video emphasizes clear visuals and an engaging style to convey its message effectively.</p>
                  <p>Tools: Adobe After Effects, Adobe Illustrator</p>
                  <h2>Workflow</h2>
                  <ol>
                    <li>Ideation</li>
                    <li>Outlining the video (scenes, animations, scripts)</li>
                    <li>Listing the graphics to be created</li>
                    <li>Choosing a style</li>
                    <li>Recording voiceovers</li>
                    <li>Animating the graphics</li>
                  </ol>
                  <h2>What I learned</h2>
                  <p>
                    This was my first full-graphic motion project. 
                    I learned the importance of thorough planning at the beginning. 
                    I had to reorganize the layers of graphics in Illustrator
                    after starting to animate them in After Effects. 
                    A well-considered organization of layers in Illustrator makes animating graphics much easier later on. <br />
                    On the other hand, I spent time deciding on the style of the graphics during the planning phase. 
                    This decision paid off, as it kept the project’s style consistent and 
                    prevented any confusion during the drawing process. 
                  </p>
                  <h2>What's next</h2>
                  <p>
                    In this project, I focused on applying the skills I gained, 
                    and other students' projects gave me a lot of inspiration. 
                    Moving forward, I would like to explore more techniques for better animations.
                  </p>
              </div>
          }/>
      </div>

    </div>
  )
}
