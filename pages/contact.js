import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import AnimatedButton from '@/components/AnimatedButton'

export default function Contact() {

    return (
        <div>
            <Head>
            <title>About Madoka Nogaki: A graphic & web designer based in Vancouver/Victoria</title>
            </Head>
            <div className={styles.contactOuterContainer}>
                <div className={styles.contactInnerContainer}>
                    <div className={styles.mascotContainer}>
                        <img src='/images/mascot.gif' alt='Mascot' className={styles.mascot} />
                    </div>
                    <div>
                        <h2>Work with Madoka</h2>
                        <form className={styles.contactForm}>
                            <input type='text' id='name' name='name' placeholder='Full Name *' />
                            <input type='email' id='email' name='email' placeholder='Email *' />
                            <textarea id='message' name='message' placeholder='Message *'></textarea>
                            <AnimatedButton type='submit'><h3>Submit</h3></AnimatedButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
}