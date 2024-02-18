import styles from "./Box2.module.css"

export default function Box2({
    title,
    image,
}) {
    return (
        <div className={styles.box2} style={{backgroundImage: image}}>
            <h2 style={{color: "var(--blue)"}}>{title}</h2>
        </div>
    )
}