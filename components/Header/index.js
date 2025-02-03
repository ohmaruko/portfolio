import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Work_Sans } from 'next/font/google'
const workSans = Work_Sans ({subsets: ['latin']})
import AnimatedButton from '../AnimatedButton'
import { useEffect, useRef } from 'react'


import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

export default function Header() {

    const containerRef = useRef(null);
    const servicesRef = useRef(null);
    const services = ['Branding', '*', 'Graphic Design', '*', 'Web Design', '*'];

    // useGSAP(() => {
    //     const container = containerRef.current;
    //     const servicesEl = servicesRef.current;
    //     if (!container || !servicesEl) return;
    //     // Create the animation
    //     const tl = gsap.timeline({ repeat: -1, ease: 'linear' });
    //     tl.to(servicesEl, {
    //         x: '-50%',
    //         duration: 20,
    //         ease: 'linear'
    //     });
    //     // Cleanup function
    //     return () => {
    //         tl.kill();
    //     };
    // }, []);


    // const services = ['Branding', 'Graphic', 'Web Design']

    return (
        <header className={`${styles.header} ${workSans.className}`}>
            <div className={styles.logo}>
                <Image src="/images/logo.svg" alt="Logo: Madoka Nogaki" width={70} height={70} />
            </div>
            <div className={styles.banner}>
                <div className={styles.bannerInner}>
                    <div className={styles.greeting}>
                        <h2>Hi, I'm Madoka.</h2>
                        <div className={styles.flipContainer}>
                            <div className={styles.flipper}>
                                <div className={styles.front}>
                                    <Image src="/images/mascot.svg" alt="Mascot" width={80} height={80} className={styles.img} />
                                </div>
                                <div className={styles.back}>
                                    <Image src="/images/profile02.png" alt="Profile Image" width={80} height={80} className={styles.img} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>Designing brands that connect and delight.</h1>
                    <div className={styles.servicesContainer} ref={containerRef} >
                        <div className={styles.services} ref={servicesRef} >
                            {[...services, ...services, ...services, ...services].map((item, index) => {
                                return <h2 key={index} className={styles.serviceItem}>{item}</h2>
                            })}
                        </div>
                    </div>
                    <h2 className={styles.servicesContainerMobile}>Branding | Graphic | Webdesign</h2>
                </div>
                <div id='scroll'></div>
            </div>
            <section className={styles.menu}>
                <AnimatedButton href="/">WORK</AnimatedButton>
                <AnimatedButton href="/about">ABOUT</AnimatedButton>
            </section>
        </header>

    )
}