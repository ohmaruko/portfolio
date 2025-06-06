import styles from './UnicornMarketingCo.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import Tabs from '@/components/Tabs'
import ImageViewer from '@/components/ImageViewer'
import AnimatedButton from '@/components/AnimatedButton'

export default function UnicornMarketingCo() {
  return (
    <div>

      <Head>
        <title>Unicorn Marketing Co. | Madoka Nogaki</title>
      </Head>

      <div className={styles.container}>
        <Box backButton={true} content={
            <div>
                <h1>Unicorn Marketing Co.</h1>
                <h1>Website Design</h1>
                <p>April 2025</p>
                <p>Website Experience and Design Intern @<a href='https://unicornmarketingco.ca/' target='_blank'>Unicorn Marketing Co.</a></p>
                <p>Tools: Figma, ShowIt</p>
                <div className={styles.textContainer} >
                  <div> 
                    <h2>Goal</h2>
                    <p>
                      The main objective was to redesign the Unicorn’s website without straying from its branding. I aimed to:
                    </p>
                    <ul>
                      <li>Enhance usability, accessibility, and engagement through improved layout and interactive elements</li>
                      <li>Strengthen SEO by adding meta titles and descriptions for each page</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.featuredPagesContainer}>
                  <h2>Featured Pages</h2>
                  <Tabs>
                    {/* tab 1 */}
                    <div key="about" title="About Page">
                      <h3>Header and Mission</h3>
                      <p>
                        To better reflect the purpose of the About page, the content was restructured to tell a more engaging story. This included reordering key information, adding a team photo, and incorporating interactive elements.  
                      </p>
                      <div className={styles.beforeAfter}>
                        <div className={styles.before}>
                          <p>Before</p>
                          <ImageViewer imageSrc="/images/unicorn/header_before.png" altText="Before redesign of header, mission, and approach section" />
                        </div>
                        <div className={styles.after}>
                          <p>After</p>
                          <ImageViewer imageSrc="/images/unicorn/header_after.gif" altText="After redesign of header, mission, and approach section" />
                        </div>
                      </div>
                      <h3>Team Section</h3>
                      <p>As Unicorn’s team expanded, the original layout became harder to navigate. This section was redesigned into a carousel, allowing users to browse team members more easily.</p>
                      <div className={styles.beforeAfter}>
                        <div className={styles.before}>
                          <p>Before</p>
                          <ImageViewer imageSrc="/images/unicorn/team_before.png" altText="Before redesign of team section" />
                        </div>
                        <div className={styles.after}>
                          <p>After</p>
                          <ImageViewer imageSrc="/images/unicorn/team_after.gif" altText="After redesign of team section" />
                        </div>
                      </div>
                      <h3>Testimonials</h3>
                      <p>
                        This section was designed to be more recognizable as a testimonials area through the use of visual hierarchy and improved color contrast. Designed for reuse across the site, it was also made visually versatile by avoiding color clashes with surrounding content.
                      </p>
                      <div className={styles.beforeAfter}>
                        <div className={styles.before}>
                          <p>Before</p>
                          <ImageViewer imageSrc="/images/unicorn/testimonials_before.png" altText="Before redesign of testimonials section" />
                        </div>
                        <div className={styles.after}>
                          <p>After</p>
                          <ImageViewer imageSrc="/images/unicorn/testimonials_after.png" altText="After redesign of testimonials section" />
                        </div>
                      </div>
                      <h3>Footer</h3>
                      <p>To make the social media section more engaging, the default design from the website builder was replaced with custom animated GIFs that reflect Unicorn’s bold and playful brand identity.</p>
                      <div className={styles.beforeAfter}>
                        <div className={styles.before}>
                          <p>Before</p>
                          <ImageViewer imageSrc="/images/unicorn/footer_before.png" altText="Before redesign of footer section" />
                        </div>
                        <div className={styles.after}>
                          <p>After</p>
                          <ImageViewer imageSrc="/images/unicorn/footer_after.gif" altText="After redesign of footer section" />
                        </div>
                      </div>
                    </div>
                    {/* tab 2 */}
                    <div key="careers" title="Careers Page">
                      <p>Previously, information about careers at Unicorn was only shared through a blog post. To make it easier to find, a dedicated Careers page was created.
                      </p>
                      <div>
                        <p>
                          Based on competitor research, the page includes company values and team photos—designed for visitors who are not only job hunting but also curious about Unicorn’s work culture.
                        </p>
                        <div className={styles.beforeAfter}>
                          <div className={styles.before}>
                            <ImageViewer imageSrc="/images/unicorn/values.png" altText="Unicorn's values" />
                          </div>
                          <div className={styles.after}>
                            <ImageViewer imageSrc="/images/unicorn/team_images.png" altText="Images of the team" />
                          </div>
                        </div>
                        <p>
                          A friendly prompt was added for users who don’t see a role that fits—encouraging them to stay in touch.
                        </p>
                        <div className={styles.imageLarge}>
                          <ImageViewer imageSrc="/images/unicorn/roles.png" altText="Open Roles" />
                        </div>
                        <p>
                          With Unicorn putting more energy into its podcast, a dedicated promotion section was created. Designed as a reusable module, it can appear across the site.
                        </p>
                        <ImageViewer imageSrc="/images/unicorn/podcast.png" altText="Podcast promotion" className={styles.imageLarge} />
                      </div>
                      <div className={styles.beforeAfter}>
                        <div className={styles.before}>
                          <p>Wireframe</p>
                          <ImageViewer imageSrc="/images/unicorn/careers_wireframe.png" altText="Careers page wireframe" />
                        </div>
                        <div className={styles.after}>
                          <p>Hi-fi Version 1</p>
                          <ImageViewer imageSrc="/images/unicorn/careers_ver1.png" altText="Careers page hi-fi version 1 design" />
                        </div>
                        <div className={styles.after}>
                          <p>Hi-fi Version 2</p>
                          <ImageViewer imageSrc="/images/unicorn/careers_ver2.png" altText="Careers page hi-fi version 2 design" />
                        </div>
                      </div>
                    </div>
                  </Tabs>
                </div>

                <div className={styles.websiteLink}>
                  <AnimatedButton href="https://unicornmarketingco.ca/" targetBlank={true} className={styles.button}>Visit Unicorn Marketing Co. website</AnimatedButton>
                </div>

                <div className={styles.textContainer}>
                  <h2>What I learned</h2>
                    <ul>
                      <li>Gained hands-on experience using the no-code website builder Showit, and learned how to integrate it with WordPress for managing blog content</li>
                      <li>Learned not to be afraid of customizing design elements to better align with a brand’s identity</li>
                      <li>Developed a deeper understanding of audience-centered design, recognizing that each page may serve a different audience with specific needs.</li>
                      <li>Beyond website design, this internship provided insight into how creative marketing agencies work with a variety of clients — from learning their business through thoughtful discovery questions, to managing multiple projects simultaneously in a fast-paced environment.</li>
                    </ul>
                </div>
            </div>
        }/>
      </div>
    </div>
  )
}
