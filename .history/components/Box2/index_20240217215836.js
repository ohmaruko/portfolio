import styles from "./Box.module.css"

export default function Box2({
    title,
    content,
}) {
    return (
        <div className={styles.box} style={{}}>
            <h2 style={{color: "var(--blue)"}}>{title}</h2>
            {content}
        </div>
    )
}