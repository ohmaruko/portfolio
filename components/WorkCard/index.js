import styles from "./WorkCard.module.css"
import Image from "next/image"
import Link from "next/link"

export default function WorkCard({
    title,
    image,
    href,
    tags,
    targetBlank,
    summary,
}) {

    return (
        <Link href={`${href}#scroll`} target={targetBlank ? "_blank" : ""} className={styles.workCard}>

            <img src={image} alt={title}/>

            <div className={styles.title}>
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
            
        </Link>
    )
}