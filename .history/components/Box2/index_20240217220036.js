import styles from "./Box2.module.css"

export default function Box2({
    title,
    content,
}) {
    return (
        <div className={styles.box2} style={{}}>
            <h2 style={{color: "var(--blue)"}}>{title}</h2>
            {content}
        </div>
    )
}