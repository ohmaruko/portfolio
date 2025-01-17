import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Work_Sans } from 'next/font/google'
const workSans = Work_Sans ({subsets: ['latin']})

export default function Header() {
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
                    <h2>Branding | Graphic | Web Design</h2>
                    {/* <p>Specializing in branding, I focus on creating playful, organic visuals. My goal is to craft simple, memorable designs that deliver clear messages and bring joy to the audience.</p> */}
                </div>
            </div>
            <div className={styles.menu}>
                <Link href='/'>WORK</Link>
                <Link href='/about'>ABOUT</Link>
            </div>
        </header>

    )
}