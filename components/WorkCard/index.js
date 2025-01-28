import styles from "./WorkCard.module.css"
import Image from "next/image"

export default function WorkCard({
    title,
    image,
    tags,
    summary
}) {
    return (
        <div className={styles.workCard}>
            <div className={styles.image}>
                <Image src={image} width={300} height={300}/>
            </div>
            <h2>{title}</h2>
            <div className={styles.tagsContainer}>
                {
                    tags.map((tag, index) => {
                        return(
                            <div key={index} className={styles.tag}><p>{tag}</p></div>
                        )
                    })
                }
            </div>
        </div>
    )
}