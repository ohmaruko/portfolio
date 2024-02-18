import styles from "./Box2.module.css"
import Image from "next/image"

export default function Box2({
    title,
    image,
}) {
    return (
        <div className={styles.box2}>
            <Image src={image} width={300} height={300}/>
            <h2 style={{color: "var(--blue)", textAlign: "center"}}>{title}</h2>
        </div>
    )
}