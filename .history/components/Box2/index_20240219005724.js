import styles from "./Box2.module.css"
import Image from "next/image"

export default function Box2({
    title,
    image,
}) {
    return (
        <div className={styles.box2}>
            <div>

            </div>
            <h2>{title}</h2>
        </div>
    )
}