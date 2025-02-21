import styles from './FurryTales.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedButton from '@/components/AnimatedButton';

export default function FurryTales() {
    return (
    <div>

        <Head>
            <title>FurryTales | Madoka Nogaki</title>
        </Head>

        <div className={styles.container}>
            <Box  backButton={true} content={
                <div>
                    <h1>FurryTales</h1>
                    <h3>Redesigning the Website for a Local Pet Treat Business</h3>
                    <div className={styles.date}>
                        <p>Feb 16 - 23, 2025 @<Link href='https://www.fluihackathon.ca/' target='_blank'>FLUI Hackathon</Link></p>
                        <p>Role: UX/UI Designer</p>
                        <p>Team: Three other UX/UI Designers</p>
                    </div>
                    <img src='/images/furrytales/banner.png' alt="FurryTales banner with home screen"  />
                    <div className={styles.btn}>
                        <AnimatedButton href='https://www.youtube.com/watch?v=ucoG4F-jbYI' targetBlank={true}>Presentation Video</AnimatedButton>
                        <AnimatedButton href='https://www.figma.com/proto/60QIY05yDwlw2WZG8Vwn0A/Furrytales-Pet?node-id=6-16&t=2cFfM7ZykA7dPCmw-1&scaling=scale-down-width&content-scaling=fixed&page-id=5%3A32&starting-point-node-id=6%3A16' targetBlank={true}>Figma Mockup</AnimatedButton>
                    </div>

                    <div className={styles.section}>
                        <h2>About</h2>
                        <p>
                            FurryTales Pet specializes in dehydrated treats for both cats and dogs, 
                            with a unique twist—customizable treats tailored to each pet’s needs. 
                            They also add an artistic touch with pet portraits on cookies, cakes, and other treats. 
                            Their mission is to make pet food fun, cute, healthy, and delicious, 
                            turning everyday treats into playful experiences for pets and their owners.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>Goal</h2>
                        <p>
                            The goal was to <strong>revamp FurryTales Pet's website </strong> 
                            to improve <strong>trust</strong>, <strong>discoverability</strong>, and <strong>user experience</strong> by:
                            <ul>
                                <li>Adding reviews, testimonials, and clear product descriptions to build trust.</li>
                                <li>Enhancing product visibility and business information for easier access.</li>
                                <li>Improving site hierarchy, design, and accessibility for a smoother browsing experience.</li>
                            </ul>
                            The aim was to align the website with FurryTales' fun and creative branding while addressing key pain points.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>Research</h2>
                        <div className={styles.subsection}>
                            <h3>Market Research</h3>
                            <ul>
                                <li>Conducted <strong>SWOT analysis</strong> and <strong>2 competitive analysis</strong></li>
                                <li>
                                    Identified gaps between the current website and competitors’ website
                                    <ul>
                                        <li>Review and testimonials</li>
                                        <li>Clear info architecture on product pages</li>
                                        <li>Consistent branding and structure across social/website</li>
                                        <li>Clear CTAs</li>
                                        <li>FurryTales’ unique and fun branding (ie. dog CEO) can be leveraged more</li>
                                    </ul>
                                </li>
                            </ul>
                            <img src='/images/furrytales/swot.png' alt="SWOT Analysis"  />
                            <img src='/images/furrytales/competitors.png' alt="Competitive Analysis"  />
                        </div>

                        <div className={styles.subsection}>
                            <h3>Website Critique</h3>
                            <ul>
                                <li>Used sticky notes on website screenshots to analyze <strong>accessibility, usability, and content</strong>.</li>
                                <li>Mapped insights into the <strong>user flow</strong>, highlighting key <strong> pain points</strong> .</li>
                            </ul>
                            <img src='/images/furrytales/critique.png' alt="Website Critique"  />
                            <img src='/images/furrytales/user_flow.png' alt="User Flow"  />
                        </div>

                        <div className={styles.subsection}>
                            <h3>User Research and Persona</h3>
                            <ul>
                                <li>User survey: 33 respondents</li>
                                <li>
                                    Conducted a survey to understand <strong>purchase behaviour and experience</strong>, covering
                                    <ul>
                                        <li>Pet treat preferences</li>
                                        <li>Sourcing and buying experience</li>
                                        <li>Product frustrations and improvement</li>
                                    </ul>
                                </li>
                                <li>Developed a persona based on research insights.</li>
                                <li>Based on survey results, a <strong>persona</strong> was developed.</li>
                            </ul>
                            <img src='/images/furrytales/user_survey.png' alt="User survey results"  />
                            <img src='/images/furrytales/persona.png' alt="Persona"  />
                        </div>
                        <div className={styles.subsection}>
                            <h3>Discovery Meeting</h3>
                            <li>
                                Asked about:
                                <ul>
                                    <li><strong>Business challenges</strong> they face</li>
                                    <li><strong>Project details</strong> based on the pre-provided outline</li>
                                    <li>Design <strong>constraints</strong> and <strong>preferences</strong></li>
                                    <li>Key desired <strong>outcomes</strong></li>
                                </ul>
                            </li>
                            <li>Ensured alignment and validated <strong>problem statements</strong>.</li>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Target Areas</h2>
                        <ul>
                            <li>
                                <strong>Customers’ lack of trust</strong>
                                <ul>
                                    <li>No reviews/testimonial content</li>
                                    <li>Product desc. is hidden and inaccessible - lack transparency</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Unclear Acquisition methods / discoverability</strong>
                                <ul>
                                    <li>Unclear where the business is located, how to get products</li>
                                    <li>Organization of products is not smooth to browse</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Hierarchy, visual design, and accessibility of website</strong>
                                <ul>
                                    <li>Poor type hierarchy and navigation experience</li>
                                    <li>Small font sizes, low colour contrasts</li>
                                </ul>
                            </li>
                        </ul>
                        <div className={styles.originalSite}>
                            <img src='/images/furrytales/original_home.png' alt="Original website home"  />
                            <img src='/images/furrytales/original_product.png' alt="Original website product page"  />
                            <img src='/images/furrytales/original_form.png' alt="Original website form"  />
                        </div>
                    </div>
                    <div className={styles.section}>
                        <h2>Branding</h2>
                        <ul>
                            <li>Adjusted the color palette for a refreshed look.</li>
                            <li>Re-selected fonts to be modern yet easy to read.</li>
                            <li>Created a more <strong>energetic</strong> and <strong>modern</strong> vibe.</li>
                        </ul>
                        <img src='/images/furrytales/branding.png' alt="Branding style guide"  />
                    </div>

                    <div className={styles.section}>
                        <h2>Sketches and Wireframes</h2>
                        <p>Focused on key pages identified for redesign.</p>
                        <div className={styles.sketches}>
                            <img src='/images/furrytales/sketch_ourstory.png' alt="Sketches"  />
                            <img src='/images/furrytales/sketch_product.png' alt="Sketches"  />
                            <img src='/images/furrytales/sketch_contact.png' alt="Sketches"  />
                            <img src='/images/furrytales/sketch_popup.png' alt="Sketches"  />
                        </div>
                    </div>
                    
                    <div className={styles.section}>
                        <h2>Hi-Fi</h2>
                        <p>Utilized <a href='https://html.to.design/home/' target='_blank'>plugins</a> to efficiently redesign the interface.</p>
                        <div className={styles.mockup}>
                            <iframe style={{border: "1px solid var(--light-orange)", borderRadius: "20px"}} width="800" height="450" src="https://embed.figma.com/proto/60QIY05yDwlw2WZG8Vwn0A/Furrytales-Pet?node-id=6-16&scaling=scale-down-width&content-scaling=fixed&page-id=5%3A32&starting-point-node-id=6%3A16&embed-host=share" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Challenges</h2>
                        <ul>
                            <li>The client meeting was rescheduled within the limited timeframe of the hackathon.</li>
                            <li><strong>Reorganized tasks and schedule</strong> to accommodate changes.</li>
                            <li><strong>Developed several hypotheses</strong> for the problem statement, to be validated in the client meeting, based on mentor feedback.</li>
                            <li>Successfully completed all deliverables on time.</li>
                        </ul>
                    </div>


                    <div className={styles.section}>
                        <h2>What's next for Spotlight</h2>
                        <p>With more time, I would develop a <strong>design system with additional elements</strong> to help maintain 
                        <strong> consistent branding</strong> across platforms. 
                        Since the owner is active on Instagram, this would make it easier to align visuals across all channels.</p>
                    </div>

                    <div className={styles.section}>
                        <h2>What I learned</h2>
                        <p><strong>Research is essential</strong> for understanding both the client and their audience before designing. Each method provided unique insights:
                            <ul>
                                <li><strong>Market research</strong> revealed gaps in industry standards.</li>
                                <li><strong>User research</strong> helped define the audience.</li>
                                <li><strong>Website critique</strong> identified current issues.</li>
                                <li><strong>Client meetings</strong> clarified business goals and challenges.</li>
                            </ul>
                            These insights made the <strong>design process more efficient and meaningful</strong>.
                        </p>
                    </div>

                </div>
            }/>
        </div>

    </div>
    )
}
