import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Work_Sans } from 'next/font/google'
const workSans = Work_Sans ({subsets: ['latin']})

export default function Header() {
    return (
        <header className={`${styles.header} ${workSans.className}`}>
            <div className={styles.banner}>
                <div>
                    <h1>Hi, I'm Madoka.</h1>
                    <h3 style={{fontWeight: 400}}>Graphic Design / Branding Design / Web Design</h3>
                </div>
                <div className={styles.flipContainer}>
                    <div className={styles.flipper}>
                        <div className={styles.front}>
                            <Image src="/images/profile3.png" alt="Profile Image" width={150} height={150} className={styles.img} />
                        </div>
                        <div className={styles.back}>
                            <Image src="/favicon.ico" alt="Logo" width={150} height={150} className={styles.img} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.menu}>
                <Link href='/'>WORK</Link>
                <Link href='/about'>ABOUT</Link>
            </div>
        </header>

    )
}