import styles from '../styles/Home.module.css'
import WorkCard from '@/components/WorkCard'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { workList } from '../data/worksList'

export default function Works() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filterTags = [
    "All",
    "Graphic Design",
    "UX/UI Design",
    "Motion Graphic Design"
  ];

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredWorks = selectedTag === "All"
  ? workList
  : workList.filter(work => work.category.includes(selectedTag));


  return (
    <div className={styles.outerContainer}>
      <Head>
        <title>Madoka Nogaki: A graphic & web designer based in Vancouver/Victoria</title>
      </Head>

      {/* Filter */}
      <div className={styles.filter}>
        {filterTags.map(tag => (
          <div
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`
              ${selectedTag === tag
                ? styles.filterOn
                : styles.filterOff
              }`}
          >
            <h4>{tag}</h4>
          </div>
        ))}
      </div>

      {/* Work Cards */}
      <div className={styles.worksContainer}>
        {
          filteredWorks.map( work => (
            <WorkCard 
              title={work.title} image={work.image}  href={work.href}
            tags={work.tags} targetBlank={work.targetBlank} summary={work.summary} />
          ))
        }
      </div>
    </div>
  )
}
