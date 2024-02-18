import styles from "./Box2.module.css"
import Image from "next/image"

export default function Box2({
    title,
    image,
}) {
    return (
        <div className={styles.box2}>
            <Image src={image} width={200} height={150}/>
            <h2 style={{color: "var(--blue)"}}>{title}</h2>
        </div>
    )
}