import styles from "./Box.module.css"

export default function Box({
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