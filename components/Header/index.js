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
                <Image src="/images/profile2.png" alt="profile image" width={150} height={150} className={styles.img} />
            </div>
            <div className={styles.menu}>
                <Link href='/'>HOME</Link>
                <Link href='/works'>MY WORK</Link>
            </div>
        </header>

    )
}