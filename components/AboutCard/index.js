import styles from "./AboutCard.module.css"
import { useState, useEffect } from "react";

export default function AboutCard({
    content,
    rotateDeg,
}) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className={styles.box} style={{transform: rotateDeg && isClient && window.innerWidth > 820 ? "rotate(" + rotateDeg + "deg)" : "rotate(0deg)"}}>
            <svg className={styles.pin} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <circle cx="11.5" cy="11.5" r="11" fill="#FFFDFA" stroke="#006AFE"/>
            </svg>
            <div className={styles.innerBox}>
                {content}
            </div>
        </div>
    )
}