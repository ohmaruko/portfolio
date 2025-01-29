import styles from "./Box.module.css"
import Link from "next/link"

export default function Box({
    title,
    content,
}) {
    return (
        <div className={styles.box} style={{}}>
            {content}
            <Link href='/'><h3 className={styles.link}>╰(･ ᗜ ･ )╯Back to Home ╰(･ ᗜ ･ )╯╰(･ ᗜ ･ )╯╰(･ ᗜ ･ )╯===3=3</h3></Link>
        </div>
    )
}