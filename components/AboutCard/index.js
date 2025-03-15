import styles from "./AboutCard.module.css"

export default function AboutCard({
    title,
    content
}) {

    return (
        <div className={styles.box}>
            <svg className={styles.pin} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <circle cx="11.5" cy="11.5" r="11" fill="#FFFDFA" stroke="#006AFE"/>
            </svg>
            <div className={styles.innerBox}>
                {title ?<h2>{title}</h2>:<></>}
                {content}
            </div>
        </div>
    )
}