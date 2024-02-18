import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Bitter } from 'next/font/google'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.banner}>
                <div>
                    <h1>Hi, I'm Madoka.</h1>
                    <p style={{fontSize:"var(--medium-font)"}}>Front-end Developer / Designer</p>
                </div>
                <Image src="/images/profile.png" alt="profile image" width={150} height={150} className={styles.img} />
            </div>
            <div className={styles.menu}>
                <Link href='/'>HOME</Link>
                <Link href='/works'>MY WORK</Link>
            </div>
        </header>

    )
}