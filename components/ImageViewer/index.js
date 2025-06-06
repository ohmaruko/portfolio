import { useState } from "react";
import styles from './ImageViewer.module.css';

export default function ImageViewer({ imageSrc, altText }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleViewer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.imageViewer}>
            <img
                src={imageSrc}
                alt={altText}
                className={styles.thumbnail}
                onClick={toggleViewer}
                />
            {isOpen && (
                <div className={styles.fullscreenOverlay} onClick={toggleViewer}>
                    <img
                        src={imageSrc}
                        alt={altText}
                        className={styles.fullscreenOverlayImage}
                        // onClick={(e) => e.stopPropagation()}
                        layout="fill"
                    />
                    <button className={styles.closeButton} onClick={toggleViewer}>
                        &times;
                    </button>
                </div>
            )}
        </div>
    )
}