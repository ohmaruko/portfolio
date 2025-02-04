import styles from './Remedify.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import AnimatedButton from '@/components/AnimatedButton';

export default function GlowKombu() {
    return (
        <div>

        <Head>
            <title>Remedify</title>
        </Head>

        <div className={styles.container}>
            <Box backButton={true} content={
                <div>
                    <div className={styles.titleOfWork}>
                            <img className={styles.bannerLogo}src='/images/remedify/remedify_logo.svg' alt="Remedify Logo" />
                            <img className={styles.bannerImg} src='/images/remedify/remedify_mockup.png' alt="Remedify mockup image showing, a medication scanning camera, a medication schedule view, a medication library screens." />
                    </div>
                    <h2>Overview</h2>
                    <p>Remedify is an <strong>AI-powered medication reminder app</strong> designed to improve adherence, simplify health management, and support users with clear medication tracking and information.</p>
                    <div className={styles.overview}>
                        <p><span>Role</span>: UI/UX Designer</p>
                        <p><span>Team</span>: A project manager, two other UI/UX designers, a graphic designer, three developers</p>
                        <p><span>Timeline</span>: September 2024 - December 2024</p>
                        <p><span>Tools</span>: Figma, Expo, UI Kitten, OpenAI GPT-4o mini, Canadian Drug Product Database API</p>
                    </div>
                    <div className={styles.btn}>
                        <AnimatedButton href='https://remedify.vercel.app/' targetBlank={true}>Landing Page</AnimatedButton>
                        <AnimatedButton href='https://github.com/yeenathan/Asclepius' targetBlank={true}><FaGithub /></AnimatedButton>
                    </div>

                    
                    <div className={styles.section}>
                        <h2>Context</h2>
                        <div className={styles.context}>
                            {/* <img src='/images/tranquify/mascots.svg' alt="Tranquify Mascots" /> */}
                            <div className={styles.contextInner}>
                            <h3>Problem</h3>
                            <p>Only about 50% of prescribed medications are taken as directed by patients with chronic illnesses. Research identifies two key reasons: misunderstanding of medication instructions and forgetfulness.</p>
                            </div>
                            <div className={styles.contextInner}>
                            <h3>Solution</h3>
                            <p>Remedify is an <strong>AI-powered medication reminder app</strong> that bridges the gap in adherence, making health management easier and more efficient. 
                            Going beyond the capabilities of a standard pillbox, Remedify is designed for <strong>individuals facing cognitive challenges or managing multiple medications</strong>, where the risk of misdosing is high. With a strong focus on accessibility and adherence, the app offers a reminder and a comprehensive medication library to support users in staying on track with their health.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Competitive Analysis</h2>
                        <div>
                            <p>While competing apps excel in accessibility with large fonts and minimal wording, there remains significant room for improvement.</p>
                            <div className={styles.competitiveAnalysis}>
                                <p><strong>Medication Input</strong>: Manual entry is tedious with too many fields and settings. Existing image recognition only identifies medication names.</p>
                                <div><FaArrowRight /></div>
                                <p>Remedify can streamline this with AI-powered photo recognition integrated with a drug database to reduce user effort.</p>
                            </div>
                            <div className={styles.competitiveAnalysis}>
                                <p><strong>Medication Info</strong>: Existing apps link to external articles or videos, making information harder to access.</p>
                                <div><FaArrowRight /></div>
                                <p>Remedify can improve by presenting details clearly within the app.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Styleguide</h2>
                        <div className={styles.styleguide}>
                            <img className={styles.styleguideLogo} src='/images/remedify/remedify_logo.svg' alt="Remedify Logo" />
                            <img src='/images/remedify/styleguide.svg' alt="styleguide"  />
                            <p>
                                <strong>Color</strong>: The color palette of our app is designed to be both vibrant and calming. 
                                The Orange colors add a sense of warmth to the user experience, which is especially important for patient dealing with diseases 
                                while the Green and Blue color create a sense of calm and reassurance. 
                                Silver white adds simplicity and cleanliness to our design.
                            </p>
                            <p>
                                <strong>Typography</strong>: Omnes Cyrillic is used for the logo wordmark, offering a unique, friendly feel. 
                                Poppins is chosen for headings and buttons for its rounded, approachable look, 
                                while Public Sans is used for subheadings and body text to ensure readability.
                            </p>
                        </div>
                    </div>
                    <h2>UI/UX</h2>
                    <div className={styles.uiuxContainer}>
                        <div className={`${styles.userflowContainer} ${styles.section}`}>
                            <h3>1. Site Map & User Flow</h3>
                            <p>All main features were outlined in a comprehensive site map, ensuring they are accessible from every page for seamless navigation.</p>
                            <img src='/images/remedify/sitemap.png' alt="An image of a user flow diagram showing the navigation structure of an app. The diagram includes four main pages: Home, Add Medication, Medication Library, and Settings. Arrows indicate that all pages are interconnected, allowing users to access any page from any other page seamlessly."  />
                            <p>An intuitive user flow was then designed to guide users effortlessly through the app's features and functionalities.</p>
                            <img src='/images/remedify/user_flow_map.png' alt="User Flow Map"  />
                        </div>

                        <div className={styles.section}>
                            <h3>2. Wireframe</h3>
                            <p>Based on the sitemap and user flow, the wireframe was created to ensure an intuitive and user-friendly experience. Key considerations included:</p>
                            <ul>
                                <li>Alignment with the target audience: individuals facing cognitive challenges or managing multiple medications.</li>
                                <li>Intuitive design with prominent call-to-action buttons, such as 'Mark Take,' ensuring users can easily track their medications.</li>
                                <li>Ensured all important buttons were sized appropriately for easy navigation.</li>
                            </ul>
                            <img src='/images/remedify/wireframe.svg' alt="Wireframe"  />
                        </div>

                        <div className={styles.section}>
                            <h3>3. Initial Hi-Fi</h3>
                            <p>Applied the original color palette and icons to maintain brand consistency.</p>
                            <p>The team was unsure about the color palette after completing the initial Hi-Fi design, so color adjustments were experimented with, and feedback was gathered from a UI/UX design professional. User testing was also incorporated to refine the design.</p>
                            <img src='/images/remedify/initialHifi.svg' alt="Initial Hi-fi"  />
                        </div>
                        <div className={styles.section}>
                            <h3>4. Feedback & User Testing</h3>
                            <p>Based on feedback from a professional and user testing results, the following major changes were implemented:</p>
                            <ul>
                                <li>As orange was perceived as a warning sign, green was used for action buttons.</li>
                                <li>Organized the schedule view on the home page by using labels like "Breakfast," "Lunch," and "Dinner" instead of a full calendar.</li>
                                <li>Redesigned the Med library information into a dashboard layout to avoid excessive scrolling and improve user navigation.</li>
                                <li>Allowed users to create nicknames for long medication names for easier identification.</li>
                                {/* <li>Clarified confusion around labels on input fields such as "duration" and "frequency."</li>
                                <li>Addressed confusion with red color on required input fields, ensuring the border turns red only when the field is not filled out.</li> */}
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <h3>5. Final Hi-Fi</h3>
                            <p>The final Hi-Fi design incorporates all adjustments based on feedback and user testing. These changes include refined color choices, a simplified schedule view, and a redesigned Med library dashboard to improve user navigation. Additionally, dark mode was introduced with carefully adjusted colors to ensure better contrast and readability in low-light environments.</p>
                            <img src='/images/remedify/finalHifi.svg' alt="Final Hi-fi"  />
                            <img src='/images/remedify/finalHifiDark.svg' alt="Final Hi-fi Dark Mode"  />
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Frontend Developing</h2>
                            <p>Built with</p>
                            <ul>
                                <li>Expo, React Native</li>
                                <li>UI Kitten</li>
                                <li>OpenAI GPT-4o Mini</li>
                                <li>Canadian Drug Product Database (DPD) API</li>
                            </ul>
                            <div className={styles.btn}>
                                <AnimatedButton href='https://github.com/yeenathan/Asclepius' targetBlank={true}><FaGithub /></AnimatedButton>
                            </div>
                    </div>


                    <div className={styles.section}>
                        <h2>Marketing</h2>
                        <div className={styles.marketingContainer}>
                            <p><strong>Marketing Landing Page</strong></p>
                            <p>The marketing landing page highlights what Remedify is and how it helps users, using clear, audience-focused language. A memorable banner features a bold heading, subheading, and a hero image showcasing the app interface. A prominent CTA button encourages users to take action, ensuring a seamless and engaging experience.</p>
                            <p><strong>Instagram</strong></p>
                            <p>On Instagram, diverse content types were created to attract and engage the audience. These include features highlighting Remedify's benefits, educational posts with medication practice statistics, and team introductions to build trust and connection.</p>
                            <img src='/images/remedify/landingpage.svg' alt="Landing Page Banner Image"  />
                            <div className={styles.btn}>
                                <AnimatedButton href='https://remedify.vercel.app/' targetBlank={true}>Landing Page</AnimatedButton>
                                <AnimatedButton href='https://www.instagram.com/rememberwithremedify/?utm_source=ig_web_button_share_sheet' targetBlank={true}><FaSquareInstagram /></AnimatedButton>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Challenges</h2>
                        <p>Although the team was on a tight timeline and the development team already needed to start coding, the initial high-fidelity design and color palette had not been confirmed by the design team. 
                            The UX/UI design team had meetings to clarify design decisions and discuss necessary adjustments. 
                            Recognizing the time constraints, the timeline was reassessed, key redesigns were prioritized, and coordination with the developers ensured that achievable changes were made within the deadline.
                            By restructuring the workflow and improving communication, the necessary redesigns were completed in time for the final showcase.</p>
                        <h2>What I learned</h2>
                        <ul>
                            <li>Effective communication when collaborating in a large, cross-functional team with diverse roles.</li>
                            <li>The importance of organizing smaller team discussions when needed, staying flexible, and addressing issues early in the process</li>
                            <li>The value of competitive analysis to understand industry standards and identify areas for improvement.</li>
                            <li>How to translate ideas into audience-centered language for impactful marketing.</li>
                        </ul>
                        <h2>What's next for Remedify?</h2>
                        <ul>
                            <li>Introducing a refill reminder to help users stay on top of medication refills.</li>
                            <li>Implementing medication conflict alerts to ensure safe usage of multiple prescriptions.</li>
                            <li>Enhancing accessibility with features like language options and adjustable font sizes.</li>
                        </ul>
                    </div>
                </div>
            }/>
        </div>
        </div>
    )
}
