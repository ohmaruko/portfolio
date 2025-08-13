import styles from '../styles/Playground.module.css'
import Head from 'next/head'
import ImageViewer from '@/components/ImageViewer'

export default function Playground() {

  return (
    <div className={styles.outerContainer}>
      <Head>
        <title>Madoka Nogaki: A graphic & web designer based in Vancouver/Victoria</title>
      </Head>

      <div className={styles.imagesOuterContainer}>
        <div className={styles.imagesInnerContainer}>
            <ImageViewer imageSrc="/images/playground/glass_morphism.png" altText="Glass Morphism" />
            <ImageViewer imageSrc="/images/playground/pixel_collage.png" altText="Pixel Collage" />
            <ImageViewer imageSrc="/images/playground/let_go.png" altText="Let Go Illustration" />
        </div>
        <div className={styles.imagesInnerContainer}>
            <ImageViewer imageSrc="/images/filmfestival/film01.png" altText="Vancouver Film Festival Poster" />  
            <ImageViewer imageSrc="/images/filmfestival/film02.png" altText="Vancouver Film Festival Poster" />  
            <ImageViewer imageSrc="/images/playground/hi_posters.png" altText="Orange posters on the wall" />  
            {/* <ImageViewer imageSrc="/images/filmfestival/film03.png" altText="Vancouver Film Festival Poster" />   */}
            <ImageViewer imageSrc="/images/playground/stickers.jpg" altText="Mascot Stickers" />
        </div>
      </div>
    </div>
  )
}
