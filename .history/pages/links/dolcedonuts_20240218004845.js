import styles from '/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'

const openSans = Open_Sans ({subsets: ['latin']})

export default function Works() {
  return (
    <>

      <head>
        <title>Madoka Nogaki Portfolio</title>
        <meta name="description" content="Portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </head>

      <div className={styles.container}>
        <Header className={openSans.className}/>
        <main className={styles.donuts}>
          <h1>Dolce Donuts</h1>
          <Link href="https://www.figma.com/proto/l18aumka9I3yuIv8W5JcGA/DolceDonuts---SET-H?type=design&t=HifTad7UBqVbb5vI-1&scaling=scale-down-width&page-id=0%3A1&node-id=1-16&starting-point-node-id=1%3A16&mode=design"
            target='_blank' style={{textDecoration: 'none', color: 'var(--blue)'}}>Mockup</Link>
        </main>

        <div className={styles.outerContainer}>
          <Footer />
        </div>
      </div>

    </>
  )
}
