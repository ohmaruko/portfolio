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
        <div className={styles.workCard}>
            <Link href={`${href}#scroll`} target={targetBlank ? "_blank" : ""}>
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
            </Link>
        </div>
    )
}