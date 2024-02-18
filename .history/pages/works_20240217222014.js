
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Open_Sans } from 'next/font/google'
import Box2 from '@/components/Box2'


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
        <main className={styles.outerContainer}>
          <div>
            <Box2 title='Dolce Donut' image = '/images/dolcedonuts.png' url = '/'/>
          </div>
          <div>
            <Box2 content={
                <div>
                    <h1>aaa</h1>
                </div>
            }/>
          </div>
          <div>
            <Box2 content={
                <div>
                    <h1>sss</h1>
                </div>
            }/>
          </div>
        </main>

        <div className={styles.outerContainer}>
          <Footer />
        </div>
      </div>

    </>
  )
}
