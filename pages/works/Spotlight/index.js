import styles from './Spotlight.module.css'
import Box from '@/components/Box'
import Head from 'next/head'
import Link from 'next/link'
import { GiTargetPrize } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { MdOutlineContentPaste } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

export default function Works() {
    return (
    <div>

        <Head>
            <title>Spotlight</title>
        </Head>

        <div className={styles.container}>
            <Box content={
                <div>
                    <h1>Spotlight</h1>
                    <h3>Helping you find the perfect study spot or gym time on campus.</h3>
                    <div className={styles.date}>
                        <p>Jan 18-19, 2025 @<Link href='https://nwhacks.io/' target='_blank'>nwHacks 2025</Link></p>
                        <p><GiTargetPrize />Winner of the Aquareum.tv Sponsor Prize</p>
                    </div>
                    <img src='/images/spotlight/spotlight_home.png' alt="Spotlight Home"  />
                    <p>Role: UI/UX Designer</p>
                    <p>Team: A frontend developer, two backend developers</p>
                    <div>
                        <div className={styles.btn}>
                            <Link href='https://devpost.com/software/spotlight-fx9bgu' target='_blank'>Devpost</Link>
                            <Link href='https://spotlight-sigma-plum.vercel.app/' target='_blank'>Spotlight</Link>
                            <Link href='https://github.com/romansinkus/spotlight' target='_blank' className={styles.icon}>
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                    <h2>Inspiration</h2>
                    <p>
                        As students, we’ve all been there—wandering around campus searching for an available study spot, only to waste valuable time and end up frustrated. 
                        The same goes for the gym—showing up only to find it overcrowded can be equally demotivating. 
                        These challenges inspired us to create Spotlight, a real-time livestream platform designed to make campus life more efficient and less stressful.
                    </p>
                    <h2>What it does</h2>
                    <p>
                        Spotlight is a real-time campus assistant designed to help students find study spots and check gym availability with ease. 
                        Using livestream technology, Spotlight analyzes spaces to identify the number of people present and available seats, 
                        providing up-to-date data at a glance. By saving your course schedule, 
                        Spotlight suggests the closest available spaces based on your previous or next class. 
                        Spotlight simplifies campus life, saving you time and making your day more productive.
                    </p>
                    <h2>How we built it</h2>
                    <ul>
                        <li>
                            Design: Figma, Adobe Illustrator
                        </li>
                        <li>
                            Frontend Development: Next.js, Tailwind CSS
                        </li>
                        <li>
                            Streaming & Real-time Processing: Livepeer with WebRTC, Flask Server
                        </li>
                        <li>
                            Object Detection and AI Integration: OpenCV, PyTorch, COCO8 Dataset, HLS Stream
                        </li>
                    </ul>
                    <h2>Design</h2>
                    <h3>1. Wireframe</h3>
                    <p>The wireframe was designed to establish the fundamental structure of the MVP product and ensure the idea was clearly shared among the team.</p>
                    <p>Key Pages and Features</p>
                    <img src='/images/spotlight/wireframe.png' alt="Spotlight wireframe including home, browse, details pages"  />
                    <p className={styles.pageDetailsTitle}><strong>Home</strong></p>
                    <div className={styles.pageDetails}>
                        <div>
                            <p><MdOutlineContentPaste /> Content: The previous location, and personalized recommendations based on data</p>
                            <p><GoGoal /> Purpose: Quick access to the most important information for users.</p>
                        </div>
                        <div>
                            <p><MdOutlineTipsAndUpdates />Design Notes:</p>
                            <ul>
                                <li>Dashboard layout ensures easy access to key data at a glance.</li>
                                <li>Banner on the top creates welcoming experience</li>
                            </ul>
                        </div>
                    </div>
                    <p className={styles.pageDetailsTitle}><strong>Browse</strong></p>
                    <div className={styles.pageDetails}>
                        <div>
                            <p><MdOutlineContentPaste /> Content: All active streams with a filter function</p>
                            <p><GoGoal /> Purpose: Allow users to explore all active streams efficiently.</p>
                        </div>
                        <div>
                            <p><MdOutlineTipsAndUpdates />Design Notes:</p>
                            <ul>
                                <li>Interface resembles familiar platforms like Twitch or YouTube, targeting user familiarity and ease of navigation.</li>
                            </ul>
                        </div>
                    </div>
                    <p className={styles.pageDetailsTitle}><strong>Details</strong></p>
                    <div className={styles.pageDetails}>
                        <div>
                            <p><MdOutlineContentPaste /> Content: real-time streaming, seat availability, detected seat availability, noise levels, busy times, & user comments</p>
                            <p><GoGoal /> Purpose: Provide comprehensive information for a selected study spot.</p>
                        </div>
                        <div>
                            <p><MdOutlineTipsAndUpdates />Design Notes:</p>
                            <ul>
                                <li>Clean layout ensuring all key information is visible without overwhelming the user.</li>
                                <li>Graphics for indicators ensure users can interpret information at a glance.</li>
                            </ul>
                        </div>
                    </div>
                    <h3>2. Styleguide</h3>
                    <div className={styles.styleguide}>
                        <p>The design choices were made with the <strong>target audience—students—in mind</strong>. 
                        The aim was to create an interface that feels <strong>welcoming, bright, and friendly, </strong>
                        encouraging engagement, usability, and supporting their study habits.</p>
                        <img src='/images/spotlight/styleguide.svg' alt="Spotlight styleguide include color, typography, and design assets like buttons"  />
                    </div>
                    <h3>3. Hi-Fi</h3>
                    <p>All colors and fonts have been applied consistently throughout the design. The banner on the home page features a yellow hue, creating a welcoming and vibrant atmosphere for users.</p>
                    <p>During the development phase, a Schedule page was added to enhance the app's usefulness for students</p>
                    <p className={styles.pageDetailsTitle}><strong>Schedule</strong></p>
                    <div className={styles.pageDetails}>
                        <div>
                            <p><MdOutlineContentPaste /> Content: Recommendations near lecture rooms based on the user's course schedule</p>
                            <p><GoGoal /> Purpose: To help students find nearby study spots during the gap between classes, especially when there's no time to go home.</p>
                        </div>
                        <div>
                            <p><MdOutlineTipsAndUpdates />Design Notes:</p>
                            <ul>
                                <li>The student’s schedule is displayed with the current time highlighted, allowing users to quickly identify available time slots</li>
                            </ul>
                        </div>
                    </div>
                    <img src='/images/spotlight/hifi.png' alt="Spotlight hi-fi design including a new page for schedule"  />
                    <h3>4. Logo</h3>
                    <p><strong>Ideation</strong></p>
                    <img src='/images/spotlight/logo_ideas.svg' alt="Spotlight logo ideas using basic shapes"  />
                    <p>The logo design was inspired by the project name, "Spotlight," with the goal of creating a simple, easily recognizable mark. Basic shapes such as ellipses, squares, and triangles were used to form the spotlight shape. Straight lines were employed to align the selected font, Futura, ensuring a clean, modern look that complements the design’s simplicity and clarity.</p>
                    <p><strong>Final logo</strong></p>
                    <p>The version featuring eyes was selected to add a touch of friendliness, making the logo more approachable and engaging for users.</p>
                    <img className={styles.finalLogo} src='/images/spotlight/logo.svg' alt="Spotlight final logo design in the shape of spotlight with eyes"  />
                    <h2>What's next for Spotlight</h2>
                    <p><strong>Privacy Enhancement</strong>: To further prioritize user privacy, a blur effect will be added to the streaming content. While Spotlight can already detect available spaces, the blur will obscure sensitive details in the stream, ensuring a more secure and private experience for users.</p>
                    <h2>Explore more about the project and its development below!</h2>
                    <div>
                        <div className={styles.btn}>
                            <Link href='https://devpost.com/software/spotlight-fx9bgu' target='_blank'>Devpost</Link>
                            <Link href='https://spotlight-sigma-plum.vercel.app/' target='_blank'>Spotlight</Link>
                            <Link href='https://github.com/romansinkus/spotlight' target='_blank' className={styles.icon}>
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.mockup}>
                        <iframe style={{border: "1px solid var(--light-orange)", borderRadius: "20px"}} width="800" height="550" src="https://embed.figma.com/proto/MHGdpBpkvLOCBJ7by1hMSG/Spotlight-nwHacks2025?node-id=10-517&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=39%3A1807&embed-host=share" allowfullscreen></iframe>
                    </div>
                </div>
            }/>
        </div>

    </div>
    )
}
