import styles from './FurryTales.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedButton from '@/components/AnimatedButton';
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
                        <p>Feb 16 - 19, 2025 @<Link href='https://www.fluihackathon.ca/' target='_blank'>FLUI Hackathon</Link></p>
                        <p>Role: UX/UI Designer</p>
                        <p>Team: Three other UX/UI Designers</p>
                    </div>
                    <img src='/images/furrytales/banner.png' alt="FurryTales banner with home screen"  />
                    <div className={styles.btn}>
                        {/* <AnimatedButton href='https://www.youtube.com/watch?v=ucoG4F-jbYI' targetBlank={true}>Presentation Video</AnimatedButton> */}
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
                        </p>
                            <ul>
                                <li>Adding reviews, testimonials, and clear product descriptions to build trust.</li>
                                <li>Enhancing product visibility and business information for easier access.</li>
                                <li>Improving site hierarchy, design, and accessibility for a smoother browsing experience.</li>
                            </ul>
                        <p>
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
                            <p>
                                During the discovery phase, we engaged in a detailed conversation with the client to ensure alignment on goals and to validate the <strong>problem statements</strong>. 
                                Key insights were gathered around the <strong>business challenges</strong>, <strong>desired outcomes</strong>, and other crucial aspects of their brand:
                            </p>
                                <ul>
                                    <li>Challenges:
                                        <ul>
                                            <li>Inconsistent branding.</li>
                                            <li>No feedback system for products/services.</li>
                                            <li>Need to expand the customer base and convert new customers into return buyers.</li>
                                        </ul>
                                    </li>
                                    <li>Unique Aspect: The brand’s dog, Soya, is the face of the brand.</li>
                                    <li>Desired Outcomes:
                                        <ul>
                                            <li>A more professional, functional website.</li>
                                            <li>Increased social media engagement, especially on Instagram for better customer communication.</li>
                                        </ul>
                                    </li>
                                </ul>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Target Areas</h2>
                        <ul>
                            <li>
                                <strong>Our Story page</strong>
                                <ul>
                                    <li>Highlight the dog (brand face) and the owner's background in nutritional science.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Building trust</strong>
                                <ul>
                                    <li>No reviews/testimonial content</li>
                                    <li>Product descriptions are hidden and hard to access, lacking transparency.</li>
                                    <li>Inconsistent branding across the site</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Acquisition methods / discoverability</strong>
                                <ul>
                                    <li>Business location and product access are unclear</li>
                                    <li>Product organization makes browsing difficult</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Hierarchy, visual design, and accessibility</strong>
                                <ul>
                                    <li>Poor type hierarchy and navigation experience</li>
                                    <li>Small fonts and low color contrast affecting readability.</li>
                                </ul>
                            </li>
                        </ul>
                        <div className={styles.originalSite}>
                            <img src='/images/furrytales/original_ourstory.png' alt="Original Our Story"  />
                            <img src='/images/furrytales/original_shopall.png' alt="Original website product page"  />
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
                        <h2>Sketches</h2>
                        <p>Focused on the identified target areas, sketches were created to brainstorm ideas. 
                            We collaborated by giving and receiving feedback to refine the design and ensure the best outcome.</p>
                        <div className={styles.sketches}>
                            <img src='/images/furrytales/sketch_ourstory.png' alt="Sketches Our Story"  />
                            <img src='/images/furrytales/sketch_product.png' alt="Sketches Product"  />
                            <img src='/images/furrytales/sketch_contact.png' alt="Sketches Contact"  />
                            <img src='/images/furrytales/sketch_popup.png' alt="Sketches Popup"  />
                        </div>
                    </div>
                    
                    <div className={styles.section}>
                        <h2>Hi-Fi</h2>
                        <div className={styles.hifi}>
                            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true}>
                                <div className={styles.hifiInner}>
                                    <p>Landing page</p>
                                    <p>Add a <span>testimonial section to build credibility</span> and a social media section to emphasize the brand's online presence.</p>
                                    <div className={styles.beforeAfter}>  
                                        <div>
                                            <p>Before</p>
                                            <img src='/images/furrytales/original_landing.png' alt="Original Landing page" />
                                        </div>
                                        <div>
                                            <p>After</p>
                                            <img src='/images/furrytales/hifi_landing.png' alt="Hifi Landing page" />
                                        </div>
                                    </div>
                                </div>
                                <div  className={styles.hifiInner}>
                                    <p>Our Story</p>
                                    <p><span>Feature the brand's dog, Soya</span>, at the top with interactive animation for better engagement.</p>
                                    <div className={styles.beforeAfter}>  
                                        <div>
                                            <p>Before</p>
                                            <img src='/images/furrytales/original_ourstory.png' alt="Original Our Story" />
                                        </div>
                                        <div>
                                            <p>After</p>
                                            <img src='/images/furrytales/hifi_ourstory.gif' alt="Hifi Our Story" />
                                        </div>
                                    </div>
                                </div>
                                <div  className={styles.hifiInner}>
                                    <p>Shop All</p>
                                    <p>Reorganize categories for easy filtering. Add <span>cat and dog tags to each product</span> to align with user behavior and improve navigation.</p>
                                    <div className={styles.beforeAfter}>  
                                        <div>
                                            <p>Before</p>
                                            <img src='/images/furrytales/original_shopall.png' alt="Original Shop All" />
                                        </div>
                                        <div>
                                            <p>After</p>
                                            <img src='/images/furrytales/hifi_shopall.png' alt="Hifi Shop All" />
                                        </div>
                                    </div>
                                </div>
                                <div  className={styles.hifiInner}>
                                    <p>Product Details</p>
                                    <p>Make <span>detailed information easily accessible</span> by adding a tab.</p>
                                    <div className={styles.beforeAfter}>  
                                        <div>
                                            <p>Before</p>
                                            <img src='/images/furrytales/original_product.png' alt="Original Product" />
                                        </div>
                                        <div>
                                            <p>After</p>
                                            <img src='/images/furrytales/hifi_product.png' alt="Hifi Product"  />
                                        </div>
                                    </div>
                                </div>
                                <div  className={styles.hifiInner}>
                                    <p>Reviews</p>
                                    <p>Add <span>reviews to build trust</span> and gather feedback.</p>
                                    <div className={styles.beforeAfter}>  
                                        <div>
                                            <p>Before</p>
                                            <img src='/images/furrytales/original_reviews.png' alt="Original Reviews" />
                                        </div>
                                        <div>
                                            <p>After</p>
                                            <img src='/images/furrytales/hifi_reviews.png' alt="Hifi Reviews"  />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.hifiInner}>
                                    <p>Locations</p>
                                    <p>Provide <span>easy access to information</span> on where users can find products.</p>
                                    <div className={styles.beforeAfter}>  
                                        <div>
                                            <p>Before</p>
                                            <img src='/images/furrytales/original_locations.png' alt="Original Locations" />
                                        </div>
                                        <div>
                                            <p>After</p>
                                            <img src='/images/furrytales/hifi_locations.png' alt="Hifi Locations"  />
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                        <div className={styles.mockup}>
                            <iframe style={{border: "1px solid var(--light-orange)", borderRadius: "20px"}} src="https://embed.figma.com/proto/60QIY05yDwlw2WZG8Vwn0A/Furrytales-Pet?node-id=6-16&scaling=scale-down-width&content-scaling=fixed&page-id=5%3A32&starting-point-node-id=6%3A16&embed-host=share" allowFullScreen></iframe>
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
                        <h2>What's next</h2>
                        <p>With more time, I would develop a <strong>design system with additional elements</strong> to help maintain 
                        <strong> consistent branding</strong> across platforms. 
                        Since the owner is active on Instagram, this would make it easier to align visuals across all channels.</p>
                    </div>

                    <div className={styles.section}>
                        <h2>What I learned</h2>
                        <p><strong>Research is essential</strong> for understanding both the client and their audience before designing. Each method provided unique insights:</p>
                            <ul>
                                <li><strong>Market research</strong> revealed gaps in industry standards.</li>
                                <li><strong>User research</strong> helped define the audience.</li>
                                <li><strong>Website critique</strong> identified current issues.</li>
                                <li><strong>Client meetings</strong> clarified business goals and challenges.</li>
                            </ul>
                        <p>These insights made the <strong>design process more efficient and meaningful</strong>.</p>
                    </div>

                </div>
            }/>
        </div>

    </div>
    )
}
