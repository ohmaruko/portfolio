import styles from "./Box2.module.css"
import Image from "next/image"

export default function Box2({
    title,
    image,
    url
}) {
    return (
        <div className={styles.box2}>
            <Link>
            <h2 style={{color: "var(--blue)", textAlign: "center"}}>{title}</h2>
        </div>
    )
}