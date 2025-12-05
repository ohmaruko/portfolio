import styles from './OlfactoryHealth.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import ImageViewer from '@/components/ImageViewer'

export default function OlfactoryHealth() {
  return (
    <div>

      <Head>
        <title>Branding, Website, and Social Media Design | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
        <Box backButton={true} content={
            <div>
                <h1>Olfactory Health Association</h1>
                <div className={styles.imageSection}>
                  <ImageViewer imageSrc='/images/olfactoryhealth/banner.png' altText="Banner" />
                </div>
                
                <div className={styles.textContainer} >
                  <div>
                    <p>
                      Olfactory Health Association is a Canadian not-for-profit that helps people support their brain health by using smell as a science-backed early indicator of cognitive change.
                    </p>
                    <p>
                      For the brand relaunch, the project involved developing a new logo, refreshed brand identity, website design, and social media templates to support the organization’s mission.
                    </p>
                    <p>Client: Olfactory Health Association</p>
                    <p>Role: UXUI/Graphic Designer</p>
                    <p>Timeline: October - November, 2025</p>
                    <p>Tools: Figma, WIX, Adobe Illustrator, Adobe Photoshop, Canva</p>
                  </div>

                  <div> 
                    <div className={styles.textColumns}>
                      <div>
                        <h3>Challenge</h3>
                        <p>Because there are few direct competitors in this emerging space, the concept of using smell as an early indicator of cognitive health is still unfamiliar to many people. Combined with complex neuroscience, the service needed clear, approachable communication.</p>
                      </div>
                      <div>
                        <h3>Solution</h3>
                        <p>The brand was designed to feel warm and approachable while staying credible, using thoughtful typography, color, custom graphics, and consistent imagery. The website made information easier to digest through clear hierarchy, intuitive layouts, and visual guidance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.imageSection}>
                  <h2>Branding</h2>
                  <ImageViewer imageSrc='/images/olfactoryhealth/logos.png' altText="Logos" />
                  <ImageViewer imageSrc='/images/olfactoryhealth/branding.png' altText="Branding" />
                </div>

                <div className={styles.videoSection}>
                  <h2>Website</h2>
                  <div>
                    <p>The <span>home page</span> was designed to communicate what Olfactory Health is and showcase the brand’s values.</p>
                    <video width="100%" height="auto"  autoPlay loop playsInline muted>
                      <source src="/images/olfactoryhealth/home.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div>
                    <p>The <span>service page</span> was designed to make the steps and pricing clear and transparent, with easy access to FAQs and the contact form.</p>
                    <video width="100%" height="auto"  autoPlay loop playsInline muted>
                      <source src="/images/olfactoryhealth/assessment.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className={styles.imageSection}>
                  <h2>Social Media</h2>
                  <ImageViewer imageSrc='/images/olfactoryhealth/social_media.png' altText="Social Media Design" />
                </div>
            </div>
        }/>
      </div>
    </div>
  )
}
