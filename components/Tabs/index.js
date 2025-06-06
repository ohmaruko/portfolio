import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";
import styles from './Tabs.module.css'; 

export  default function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(0);
    const router = useRouter();
    const tab = router.query.tab || 0;//checks if the URL has a ?tab=x
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
        if(!tab) return;

        const tabIndex = childrenArray.map(child => child.key).indexOf(tab);
        if (tabIndex < 0) return;
        setActiveTab(tabIndex);
    }, [tab, childrenArray]);

    const handleTabChange = (e, index, cb = () => {}) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveTab(index);
        router.push(
            { query: { ...router.query, tab: index }}, 
            undefined, 
            { shallow: true }
        );
        cb && cb();
    }

    return (
        <div className={styles.tabs}>
            <div className={styles.tabList}>
                {childrenArray.map((child, index) => (
                    <a
                        href="#"
                        key={child.key}
                        className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                        onClick={e => handleTabChange(e, child.key, child.props.onClick)}
                    >
                        {child.props.title}
                    </a>
                ))}
            </div>
            <div className={styles.tabContent}>
                {childrenArray[activeTab]}
            </div>
        </div>
    )
}