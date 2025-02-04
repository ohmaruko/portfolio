import styles from "./Box.module.css"
import Link from "next/link"

export default function Box({
    title,
    content,
    backButton
}) {
    return (
        <div className={styles.box} style={{}}>
            {title ?<h2>{title}</h2>:<></>}
            {content}
            {backButton ? 
                <div className={styles.backbutton}>
                    <h1>Thank you!</h1>
                    <Link href='/'><h3 className={styles.link}>╰(･ ᗜ ･ )╯Back to Home ╰(･ ᗜ ･ )╯╰(･ ᗜ ･ )╯╰(･ ᗜ ･ )╯===3=3</h3></Link>
                </div>
                : <></>}
        </div>
    )
}